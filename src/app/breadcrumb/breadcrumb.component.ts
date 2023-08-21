import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {

  @Input() tBread: string = ''
  @Input() fBread: string = ''
  @Input() sBread: string = ''
  @Input() thBread: string = ''

}
