import { NgModule } from "@angular/core";
import { MaskInputDirective } from "./date-mask-input.directive";


@NgModule({
  declarations:
    [MaskInputDirective,
    ],
  exports:
    [MaskInputDirective,
    ]
})

export class DirectivesModule { }