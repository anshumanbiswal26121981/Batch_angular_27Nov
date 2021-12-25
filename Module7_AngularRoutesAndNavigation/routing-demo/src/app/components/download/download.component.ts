import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  statementType: any = '';

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const type = this._activatedRoute.snapshot.paramMap.get('type')?.toString();
    this.statementType = type;

    this._activatedRoute.params.subscribe((params: any) => { 
      this.statementType = params.type;
    })

  }


}
