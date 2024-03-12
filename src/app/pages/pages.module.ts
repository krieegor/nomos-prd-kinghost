import { FooterModule } from './footer/footer.module';
import { FastLinksModule } from './fast-links/fast-links.module';
import { ServicesActionsModule } from './services-actions/services-actions.module';
import { PagesComponent } from './pages.component';
import { VideoComponent } from './video/video.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { ServicesComponent } from './services/services.component';
import { InfosComponent } from './infos/infos.component';
import { AreasModule } from './areas/areas.module';
import { ClientsComponent } from './clients/clients.component';
import { LgpdModule } from './lgpd/lgpd.module';
import { ScheduleTimeComponent } from './schedule-time/schedule-time.component';
import { OperatingSegmentsComponent } from './operating-segments/operating-segments.component';



@NgModule({
    declarations: [
        PagesComponent,
        VideoComponent,
        AboutUsComponent,
        CertificateComponent,
        ConsultationComponent,
        ServicesComponent,
        InfosComponent,
        ClientsComponent,
        ScheduleTimeComponent,
        OperatingSegmentsComponent,
    ],
    imports: [
        BrowserModule,
        ServicesActionsModule,
        AreasModule,
        LgpdModule,
        FastLinksModule,
        FooterModule
    ],
    providers: [],
    exports: [
        PagesComponent
    ]
})
export class PagesModule { }
