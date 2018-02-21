import { NgModule } from '@angular/core';
import { Mission4C2Component } from './cycle2/mission4-c2/mission4-c2';
import { Mission5C2Component } from './cycle2/mission5-c2/mission5-c2';
import { Mission6C2Component } from './cycle2/mission6-c2/mission6-c2';
import { BonusC2Component } from './cycle2/bonus-c2/bonus-c2';
@NgModule({
	declarations: [Mission4C2Component,
    Mission5C2Component,
    Mission6C2Component,
    BonusC2Component],
	imports: [],
	exports: [Mission4C2Component,
    Mission5C2Component,
    Mission6C2Component,
    BonusC2Component]
})
export class ComponentsModule {}
