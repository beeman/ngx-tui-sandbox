import { Component } from '@angular/core';
import { TuiEditorOptions } from 'ngx-tui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  options: TuiEditorOptions = {
    initialValue: '# Hello World',
    initialEditType: 'markdown',
    previewStyle: 'vertical',
    height: 'auto',
    minHeight: '500px',
  };
}
