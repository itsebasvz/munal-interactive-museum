import { museumData } from '../data/museumData.js';
import { SceneView } from './SceneView.js';
import { PaintingDetail } from './PaintingDetail.js';

export class VirtualTour {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.currentRoom = 'salaA';
        this.currentNodeId = museumData[this.currentRoom].startNode;
        this.sceneView = new SceneView(this);
        this.paintingDetail = new PaintingDetail();

        this.init();
    }

    init() {
        this.render();
        this.paintingDetail.mount(document.body); // Mount overlay to body
    }

    getCurrentNode() {
        return museumData[this.currentRoom].nodes[this.currentNodeId];
    }

    navigateTo(target) {
        // Check if target is an object (cross-room) or string (same room)
        let nodeId = target;
        if (typeof target === 'object') {
            // It's likely an arrow object passed directly, but let's look at how we call it.
            // Actually, let's change the signature or how we call it.
            // The arrow object has { target: 'id' } or { targetRoom: 'room', targetNode: 'id' }
            // Let's change the call site in SceneView to pass the whole arrow object or handle it there.
            // Better: let's update this method to accept (nodeId, roomId)
        }
    }

    // Revised approach: The SceneView will pass the arrow object's data.
    navigate(arrowData) {
        if (arrowData.targetRoom) {
            this.currentRoom = arrowData.targetRoom;
            this.currentNodeId = arrowData.targetNode || 'index';
        } else {
            this.currentNodeId = arrowData.target;
        }

        if (museumData[this.currentRoom] && museumData[this.currentRoom].nodes[this.currentNodeId]) {
            this.render();
        } else {
            console.error(`Node ${this.currentNodeId} in room ${this.currentRoom} not found`);
        }
    }

    render() {
        const nodeData = this.getCurrentNode();
        this.container.innerHTML = ''; // Clear container

        const sceneElement = this.sceneView.createSceneElement(nodeData);
        this.container.appendChild(sceneElement);
        this.container.dataset.room = this.currentRoom;

        this.updateNavbar();
    }

    updateNavbar() {
        const navbar = document.getElementById('main-navbar');
        if (!navbar) return;

        // Define transparent nodes per room
        const transparentRules = {
            salaA: ['derecha', 'izquierda', 'centro_derecha', 'centro_izquierda'],
            salaC: ['derecha_cuadro_izq', 'derecha_cuadro_der', 'centro'] // Added centro (salaC1) if needed, otherwise just the closeups
        };

        // Check if current node is in the transparent list for the current room
        const isTransparent = transparentRules[this.currentRoom] &&
            transparentRules[this.currentRoom].includes(this.currentNodeId);

        if (isTransparent) {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.boxShadow = 'none';
        } else {
            // Default dark
            navbar.style.backgroundColor = '#06131B';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    }

    openDetail(paintingId) {
        const nodeData = this.getCurrentNode();
        const painting = nodeData.paintings.find(p => p.id === paintingId);
        if (painting) {
            this.paintingDetail.show(painting);
        }
    }
}
