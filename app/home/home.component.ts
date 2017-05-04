import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    msg: string;

    constructor(private mAuthService: AuthService) {
    }

    ngOnInit() {
        this.msg = '当前登录状态是：' + this.mAuthService.isLoginUser();
    }

}
