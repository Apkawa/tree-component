/**
 * This file is generated by 'file2variable-cli'
 * It is not mean to be edited by hand
 */
export const angularNodeTemplateHtml = `<li role="treeitem" [class]="nodeClassName" [attr.id]="id"><i [class]="oclClassName" role="presentation" (click)="ontoggle()"></i><a [class]="anchorClassName" href="javascript:void(0)" [draggable]="draggable" (click)="onchange()" (dblclick)="ontoggle()" (mouseenter)="hover(true)" (mouseleave)="hover(false)" [attr.data-path]="pathString"><i *ngIf="checkbox" [class]="checkboxClassName" role="presentation"></i><i *ngIf="data.icon !== false" [class]="iconClassName" role="presentation"></i>{{data.text}}<span *ngIf="hasMarker" [class]="markerClassName">&#160;</span></a><ul *ngIf="data.children" role="group" class="tree-children"><node *ngFor="let child of data.children; let i = index" [data]="child" [last]="i === data.children.length - 1" [checkbox]="checkbox" [path]="geChildPath(i)" [draggable]="draggable" [preid]="preid" (toggle)="ontoggle($event)" (change)="onchange($event)"></node></ul></li>`;
export const angularTreeTemplateHtml = `<div [class]="rootClassName" role="tree"><ul [class]="containerClassName" role="group" (dragstart)="ondragstart($event)" (dragend)="ondragend($event)" (dragover)="ondragover($event)" (dragenter)="ondragenter($event)" (dragleave)="ondragleave($event)" (drop)="ondrop($event)"><node *ngFor="let child of data; let i = index" [data]="child" [last]="i === data.length - 1" [checkbox]="checkbox" [path]="[i]" [draggable]="draggable" [preid]="preid" (toggle)="ontoggle($event)" (change)="onchange($event)"></node></ul></div>`;
