import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {RouterModule} from "@angular/router";
// module
import {SharedModule} from "../shared/shared.module";
import {MarkdownModule} from "angular2-markdown";
import {TagInputModule} from "ng2-tag-input";
// component
import {ArticleDetailComponent} from "app/article/detail/article-detail.component";
import {ArticleWriteComponent} from "app/article/write/article-write.component";
import {ArticleListComponent} from "./list/article-list.component";
// service
import {ArticleService} from "./article.service";
// guard
import {ArticleGuard} from "./article.guard";
import {ArticleComponent} from "./header/article-header.component";
import {ArticleSectionComponent} from "./list/section/article-section.component";

@NgModule({
    imports: [
        RouterModule,
        SharedModule,
        TagInputModule,
        BrowserAnimationsModule,
        MarkdownModule.forRoot()
    ],
    declarations: [
        ArticleDetailComponent,
        ArticleListComponent,
        ArticleWriteComponent,
        ArticleComponent,
        ArticleSectionComponent
    ],
    exports: [
        ArticleDetailComponent,
        ArticleListComponent,
        ArticleWriteComponent,
        ArticleComponent,
        ArticleSectionComponent
    ],
    providers: [
        ArticleService,
        ArticleGuard
    ]
})
export class ArticleModule {
}