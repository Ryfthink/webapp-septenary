import {AfterViewInit, Component, OnInit} from "@angular/core";
import {AuthEvent, AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {HeaderEvent, HeaderService} from "./header.service";
import User from "../model/user";

const $ = jQuery;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

    headerIsHollow: boolean;

    loginUser: User;

    constructor(private headerService: HeaderService,
                private authService: AuthService,
                private router: Router) {
        $(window).resize(() => this.onWindowSizeChange());
    }

    ngOnInit(): void {
        this.headerService.events.subscribe((event: HeaderEvent) => {
            this.headerIsHollow = event.isHollow;
        });

        this.authService.events.subscribe((event: AuthEvent) => {
            this.loginUser = event.loginUser;
        });

        this.authService.ensureLoggedIn();
    }

    ngAfterViewInit(): void {
        const nav = jQuery('.nav-header');
        jQuery(document).scroll(function () {
            nav.toggleClass('pinned', $(this).scrollTop() > nav.height());
        });
    }

    get loggedIn() {
        return this.loginUser != null;
    }

    get authAvatar() {
        return this.loginUser ? this.loginUser.avatar : null;
    }

    onLogoutClick() {
        this.authService.logout();
        this.router.navigateByUrl('');
    }

    onWindowSizeChange() {

    }

}
