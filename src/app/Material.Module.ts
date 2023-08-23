
import { NgModule } from "@angular/core";


import {MatButtonModule} from "@angular/material/button"


import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
    exports: [
         MatButtonModule,
         MatFormFieldModule,
         MatInputModule
    ]
})


export class MaterialModel {}
