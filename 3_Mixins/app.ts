import {IsActive} from "./is-active";
import {IsExpanded} from "./is-expanded";

class NewComponent implements IsActive, IsExpanded {

    // isActive
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;

    // isExpanded
    isExpanded: boolean = false;
    expand: () => void;
    collapse: () => void;

    interact() {
        console.log("I am Interacting");
    }
}

































////////////////////////////////////////
// https://www.typescriptlang.org/docs/handbook/mixins.html
// In your runtime library somewhere
////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

applyMixins(NewComponent, [IsExpanded, IsActive]);

let newComponent: NewComponent = new NewComponent();


newComponent.activate();
newComponent.deactivate();
newComponent.expand();
newComponent.collapse();
newComponent.interact();
