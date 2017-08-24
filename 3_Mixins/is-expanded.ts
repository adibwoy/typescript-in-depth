export class IsExpanded {
    isExpanded: boolean;

    expand(): void {
        this.isExpanded = true;
        console.log("I am expanded");
    }

    collapse(): void {
        this.isExpanded = false;
        console.log("I am collapsed");
    }
}