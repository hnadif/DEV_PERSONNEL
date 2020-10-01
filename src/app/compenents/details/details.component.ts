import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  firstName: String ="Default value"
  lastName: String ="Default value"
  constructor(private userService: UserService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.firstName = this.userService.getUserById(+id).firstName
    this.lastName = this.userService.getUserById(+id).lastName;
  }

}
