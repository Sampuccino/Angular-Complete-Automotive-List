import { Component, OnInit } from '@angular/core';
import {Job} from './jobs.model';
import {JobService} from './job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [JobService]
})
export class JobsComponent implements OnInit {
  selectedJob: Job;
  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.jobSelected
      .subscribe( (job: Job) => { this.selectedJob = job; } );
  }

}
