/**
 * Created by SINGH on 2/26/2017.
 */

import { Theme } from './theme.interface';

export interface User{
  name: {firstName : string ; lastName : string;},
  age?:number;
  email: string;
  gender?:string;
  role?:string;
  theme?:Theme;
  topics?:string[];
  isActive?:boolean;
  toggle?:string;
}
