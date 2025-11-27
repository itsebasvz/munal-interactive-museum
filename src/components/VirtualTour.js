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
    }

    openDetail(paintingId) {
        const nodeData = this.getCurrentNode();
        const painting = nodeData.paintings.find(p => p.id === paintingId);
        if (painting) {
            this.paintingDetail.show(painting);
        }
    }
}
