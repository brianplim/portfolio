import { Component } from '@angular/core';
import { LimPortfolioPage } from './components/lim';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [LimPortfolioPage],
    template: `
        <lim-portfolio-page />
    `
})
export class Landing {}
