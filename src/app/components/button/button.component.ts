import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'dy-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  secondary: string;
  neutral: string;
  
  constructor() {}
  
  ngOnInit() {

  }

  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Clique Aqui';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();


  public get classes(): string[] {
    let mode = this.primary ? 'btn--primary' : '' || this.secondary ? 'btn--secondary' : '' ||  this.neutral ? 'btn--neutral': '';
    

    return ['btn', `btn--${this.size}`, mode];
  }


}