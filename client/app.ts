import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2-meteor';

//import {Ng2BootstrapConfig, Ng2BootstrapTheme} from 'ng2-bootstrap';

//Ng2BootstrapConfig.theme = Ng2BootstrapTheme.BS4;

@Component({
    selector: 'app'
})
@View({
    template: `<button class="btn btn-primary">Hello</button>`
})
class App {
    constructor() {
        //Ng2BootstrapConfig.theme = Ng2BootstrapTheme.BS4;
    }
}

bootstrap(App);