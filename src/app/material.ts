import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule, MatIcon} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {NgModule} from '@angular/core';

@NgModule({
    imports:[MatButtonModule, MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule],
    exports:[MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule],    
}, )
export class MaterialModule {}