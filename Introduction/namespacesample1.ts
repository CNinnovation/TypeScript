namespace Samples {
	interface IDisplay {
		display() : void;		
	}
	
	export interface DisplayInterface {
		displayi() : void;		
	}
	
	export class MyDisplay implements DisplayInterface, IDisplay {
		display() : void {
			console.log("MyDisplay.display");
		}
		displayi() : void {
			console.log("MyDisplay.displayi");
			this.display();
		}			
	}
}

var mdis : Samples.DisplayInterface = new Samples.MyDisplay();
mdis.displayi();