import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pass } from '../model/pass';
import { TreeNode } from 'primeng/api';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  iFrameUrl!: SafeResourceUrl;
  public passes: Pass[] = [];
  public textHeader!: string;
  public nodes: TreeNode[] = [];

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.textHeader = 'RTAF Satellite Operation Support System';
    this.iFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://kbc-spoc.rtaf.mi.th'
    );
    this.initPass();
    this.initNode();
  }

  public initNode(): void {
    this.nodes = [
      {
        key: '0',
        label: 'Operation Support Center',
        children: [
          {
            key: '0-0',
            label: 'Nominal Operation Procedure',
            children: [
              {
                key: '0-0-1',
                label: 'Activate Beacon',
                children: [],
              },
            ],
          },
          // {
          //   key: '0-1',
          //   label: 'Off Nominal Operation Procedure',
          //   children: [],
          // },
        ],
      },
    ];
  }

  public initPass(): void {
    const p1 = new Pass();
    p1.pass = 'DayPass 1';
    p1.aos = '07:00:30';
    p1.los = '07:10:30';
    p1.maxEl = '5.6';
    this.passes.push(p1);
    const p2 = new Pass();
    p2.pass = 'DayPass 2';
    p2.aos = '09:00:30';
    p2.los = '09:11:30';
    p2.maxEl = '7.5';
    this.passes.push(p2);
    const p3 = new Pass();
    p3.pass = 'DayPass 3';
    p3.aos = '14:23:30';
    p3.los = '14:33:30';
    p3.maxEl = '6.6';
    this.passes.push(p3);
    const p4 = new Pass();
    p4.pass = 'DayPass 4';
    p4.aos = '16:05:39';
    p4.los = '16:17:55';
    p4.maxEl = '38.2';
    this.passes.push(p4);
  }
}
