export class IsActive {
    isActive: boolean;
    activate() {
        this.isActive = true;
        console.log("I am activated");
    }
    deactivate() {
        this.isActive = false;
        console.log("I am deactivated");
    }
}