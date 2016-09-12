import { Component, OnInit } from '@angular/core';
//import { RuntimeCompiler} from '@angular/compiler';

import { JournalService } from '../services/journal.service';
import { Journal } from '../models/journal';
import { SuperAuth } from '../supers/super-auth';

@Component({
    selector: 'home',
    templateUrl: 'app/templates/home.component.html',
    providers: [JournalService]
})
export class HomeComponent implements OnInit
{
    journals: Journal[];
    errorMessage: string;
    isLoggedIn: boolean;
    constructor(private journalService: JournalService){}//, private _runtimeCompiler: RuntimeCompiler) {}
    

    ngOnInit()
    {
        if (this.isLoggedIn = SuperAuth.isLoggedIn())
            this.getJournals();
    }

    getJournals()
    {
      this.journalService.getJournals()
                          .subscribe(
                          journals => this.journals = journals,
                          error =>  this.errorMessage = <any>error);
    }

    getMyJournal()
    {
        this.journalService.getMyJournal();
    }
}