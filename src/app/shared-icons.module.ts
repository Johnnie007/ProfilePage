import { NgModule } from '@angular/core';
import { LucideWrench, LucideMenu} from '@lucide/angular';

@NgModule({
  imports: [LucideWrench, LucideMenu],
  exports: [LucideWrench, LucideMenu]
})
export class SharedIconsModule { }
