import { useContext, useState } from 'react'
import { Context } from './index'

const cards: any = [
    {
        img: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 52 36" fill="none">
            <path d="M9.43449 7.6797V33.1078C9.43449 33.1078 4.2627 34.1852 4.2627 28.9057C4.2627 25.781 4.2627 16.2994 4.2627 12.205V10.6966C4.2627 10.3734 4.37045 10.0501 4.4782 9.72687C4.80144 8.75715 6.20211 7.57195 9.43449 7.6797Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1 12.4209H4.37076" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1.35352 12.4209V20.0709H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M4.26267 28.4755H1.35352V23.9502H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 7.68066H11.0508H34.8626V33.1087H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M11.4824 7.68027V2.93945H21.2873L21.3195 4.18077C21.3195 4.18077 19.1324 4.23241 19.2401 7.78802" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M21.2869 4.23238C21.2869 4.23238 20.9513 1.00043 22.0264 1.00061C24.4999 1.00104 25.5967 1 26.6742 1C27.5035 1 27.7517 1.43098 27.7517 1.96971C27.7517 2.1852 27.7517 2.29295 27.7517 2.61619V3.90912V4.23238H21.2869Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M29.6915 7.68047C29.6915 7.68047 29.7666 4.07338 27.5039 4.18113" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 11.1289H26.243V12.8528V29.5535H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8628 12.6367H26.2432" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 17.8076H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 22.7646H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 27.9365H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M16.1145 14.4678H20.2089L18.8082 17.5924H23.0103L15.899 26.4276L16.1145 25.4578L17.2998 20.9325H12.7744L16.1145 14.4678Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8625 7.68C34.8625 7.68 34.5393 5.95605 37.1252 5.95605C39.7111 5.95605 39.9266 7.68 39.9266 7.68V33.1081C39.9266 33.1081 40.0344 34.832 37.7717 34.832C35.4013 34.832 34.8625 34.7243 34.8625 33.1081" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.236 11.8818H39.8184H44.236Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2376 28.6914H39.9277" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.4658 11.6016V28.9172" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 25.3506H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 22.0107H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 18.6709H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 15.2227H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2373 16.8389H50.1633C50.7021 16.8389 51.133 17.2698 51.133 17.8086V22.2262C51.133 22.7649 50.7021 23.1959 50.1633 23.1959H44.2373" stroke="currentColor" strokeMiterlimit="10" />
        </svg>, title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.'
    },
    {
        img: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 52 36" fill="none">
            <path d="M9.43449 7.6797V33.1078C9.43449 33.1078 4.2627 34.1852 4.2627 28.9057C4.2627 25.781 4.2627 16.2994 4.2627 12.205V10.6966C4.2627 10.3734 4.37045 10.0501 4.4782 9.72687C4.80144 8.75715 6.20211 7.57195 9.43449 7.6797Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1 12.4209H4.37076" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1.35352 12.4209V20.0709H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M4.26267 28.4755H1.35352V23.9502H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 7.68066H11.0508H34.8626V33.1087H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M11.4824 7.68027V2.93945H21.2873L21.3195 4.18077C21.3195 4.18077 19.1324 4.23241 19.2401 7.78802" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M21.2869 4.23238C21.2869 4.23238 20.9513 1.00043 22.0264 1.00061C24.4999 1.00104 25.5967 1 26.6742 1C27.5035 1 27.7517 1.43098 27.7517 1.96971C27.7517 2.1852 27.7517 2.29295 27.7517 2.61619V3.90912V4.23238H21.2869Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M29.6915 7.68047C29.6915 7.68047 29.7666 4.07338 27.5039 4.18113" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 11.1289H26.243V12.8528V29.5535H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8628 12.6367H26.2432" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 17.8076H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 22.7646H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 27.9365H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M16.1145 14.4678H20.2089L18.8082 17.5924H23.0103L15.899 26.4276L16.1145 25.4578L17.2998 20.9325H12.7744L16.1145 14.4678Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8625 7.68C34.8625 7.68 34.5393 5.95605 37.1252 5.95605C39.7111 5.95605 39.9266 7.68 39.9266 7.68V33.1081C39.9266 33.1081 40.0344 34.832 37.7717 34.832C35.4013 34.832 34.8625 34.7243 34.8625 33.1081" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.236 11.8818H39.8184H44.236Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2376 28.6914H39.9277" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.4658 11.6016V28.9172" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 25.3506H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 22.0107H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 18.6709H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 15.2227H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2373 16.8389H50.1633C50.7021 16.8389 51.133 17.2698 51.133 17.8086V22.2262C51.133 22.7649 50.7021 23.1959 50.1633 23.1959H44.2373" stroke="currentColor" strokeMiterlimit="10" />
        </svg>, title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.'
    }, {
        img: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 52 36" fill="none">
            <path d="M9.43449 7.6797V33.1078C9.43449 33.1078 4.2627 34.1852 4.2627 28.9057C4.2627 25.781 4.2627 16.2994 4.2627 12.205V10.6966C4.2627 10.3734 4.37045 10.0501 4.4782 9.72687C4.80144 8.75715 6.20211 7.57195 9.43449 7.6797Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1 12.4209H4.37076" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1.35352 12.4209V20.0709H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M4.26267 28.4755H1.35352V23.9502H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 7.68066H11.0508H34.8626V33.1087H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M11.4824 7.68027V2.93945H21.2873L21.3195 4.18077C21.3195 4.18077 19.1324 4.23241 19.2401 7.78802" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M21.2869 4.23238C21.2869 4.23238 20.9513 1.00043 22.0264 1.00061C24.4999 1.00104 25.5967 1 26.6742 1C27.5035 1 27.7517 1.43098 27.7517 1.96971C27.7517 2.1852 27.7517 2.29295 27.7517 2.61619V3.90912V4.23238H21.2869Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M29.6915 7.68047C29.6915 7.68047 29.7666 4.07338 27.5039 4.18113" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 11.1289H26.243V12.8528V29.5535H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8628 12.6367H26.2432" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 17.8076H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 22.7646H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 27.9365H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M16.1145 14.4678H20.2089L18.8082 17.5924H23.0103L15.899 26.4276L16.1145 25.4578L17.2998 20.9325H12.7744L16.1145 14.4678Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8625 7.68C34.8625 7.68 34.5393 5.95605 37.1252 5.95605C39.7111 5.95605 39.9266 7.68 39.9266 7.68V33.1081C39.9266 33.1081 40.0344 34.832 37.7717 34.832C35.4013 34.832 34.8625 34.7243 34.8625 33.1081" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.236 11.8818H39.8184H44.236Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2376 28.6914H39.9277" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.4658 11.6016V28.9172" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 25.3506H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 22.0107H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 18.6709H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 15.2227H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2373 16.8389H50.1633C50.7021 16.8389 51.133 17.2698 51.133 17.8086V22.2262C51.133 22.7649 50.7021 23.1959 50.1633 23.1959H44.2373" stroke="currentColor" strokeMiterlimit="10" />
        </svg>, title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.'
    }, {
        img: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 52 36" fill="none">
            <path d="M9.43449 7.6797V33.1078C9.43449 33.1078 4.2627 34.1852 4.2627 28.9057C4.2627 25.781 4.2627 16.2994 4.2627 12.205V10.6966C4.2627 10.3734 4.37045 10.0501 4.4782 9.72687C4.80144 8.75715 6.20211 7.57195 9.43449 7.6797Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1 12.4209H4.37076" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1.35352 12.4209V20.0709H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M4.26267 28.4755H1.35352V23.9502H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 7.68066H11.0508H34.8626V33.1087H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M11.4824 7.68027V2.93945H21.2873L21.3195 4.18077C21.3195 4.18077 19.1324 4.23241 19.2401 7.78802" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M21.2869 4.23238C21.2869 4.23238 20.9513 1.00043 22.0264 1.00061C24.4999 1.00104 25.5967 1 26.6742 1C27.5035 1 27.7517 1.43098 27.7517 1.96971C27.7517 2.1852 27.7517 2.29295 27.7517 2.61619V3.90912V4.23238H21.2869Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M29.6915 7.68047C29.6915 7.68047 29.7666 4.07338 27.5039 4.18113" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 11.1289H26.243V12.8528V29.5535H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8628 12.6367H26.2432" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 17.8076H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 22.7646H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 27.9365H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M16.1145 14.4678H20.2089L18.8082 17.5924H23.0103L15.899 26.4276L16.1145 25.4578L17.2998 20.9325H12.7744L16.1145 14.4678Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8625 7.68C34.8625 7.68 34.5393 5.95605 37.1252 5.95605C39.7111 5.95605 39.9266 7.68 39.9266 7.68V33.1081C39.9266 33.1081 40.0344 34.832 37.7717 34.832C35.4013 34.832 34.8625 34.7243 34.8625 33.1081" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.236 11.8818H39.8184H44.236Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2376 28.6914H39.9277" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.4658 11.6016V28.9172" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 25.3506H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 22.0107H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 18.6709H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 15.2227H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2373 16.8389H50.1633C50.7021 16.8389 51.133 17.2698 51.133 17.8086V22.2262C51.133 22.7649 50.7021 23.1959 50.1633 23.1959H44.2373" stroke="currentColor" strokeMiterlimit="10" />
        </svg>, title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.'
    }, {
        img: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 52 36" fill="none">
            <path d="M9.43449 7.6797V33.1078C9.43449 33.1078 4.2627 34.1852 4.2627 28.9057C4.2627 25.781 4.2627 16.2994 4.2627 12.205V10.6966C4.2627 10.3734 4.37045 10.0501 4.4782 9.72687C4.80144 8.75715 6.20211 7.57195 9.43449 7.6797Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1 12.4209H4.37076" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1.35352 12.4209V20.0709H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M4.26267 28.4755H1.35352V23.9502H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 7.68066H11.0508H34.8626V33.1087H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M11.4824 7.68027V2.93945H21.2873L21.3195 4.18077C21.3195 4.18077 19.1324 4.23241 19.2401 7.78802" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M21.2869 4.23238C21.2869 4.23238 20.9513 1.00043 22.0264 1.00061C24.4999 1.00104 25.5967 1 26.6742 1C27.5035 1 27.7517 1.43098 27.7517 1.96971C27.7517 2.1852 27.7517 2.29295 27.7517 2.61619V3.90912V4.23238H21.2869Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M29.6915 7.68047C29.6915 7.68047 29.7666 4.07338 27.5039 4.18113" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 11.1289H26.243V12.8528V29.5535H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8628 12.6367H26.2432" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 17.8076H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 22.7646H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 27.9365H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M16.1145 14.4678H20.2089L18.8082 17.5924H23.0103L15.899 26.4276L16.1145 25.4578L17.2998 20.9325H12.7744L16.1145 14.4678Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8625 7.68C34.8625 7.68 34.5393 5.95605 37.1252 5.95605C39.7111 5.95605 39.9266 7.68 39.9266 7.68V33.1081C39.9266 33.1081 40.0344 34.832 37.7717 34.832C35.4013 34.832 34.8625 34.7243 34.8625 33.1081" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.236 11.8818H39.8184H44.236Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2376 28.6914H39.9277" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.4658 11.6016V28.9172" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 25.3506H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 22.0107H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 18.6709H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 15.2227H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2373 16.8389H50.1633C50.7021 16.8389 51.133 17.2698 51.133 17.8086V22.2262C51.133 22.7649 50.7021 23.1959 50.1633 23.1959H44.2373" stroke="currentColor" strokeMiterlimit="10" />
        </svg>, title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.'
    }, {
        img: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 52 36" fill="none">
            <path d="M9.43449 7.6797V33.1078C9.43449 33.1078 4.2627 34.1852 4.2627 28.9057C4.2627 25.781 4.2627 16.2994 4.2627 12.205V10.6966C4.2627 10.3734 4.37045 10.0501 4.4782 9.72687C4.80144 8.75715 6.20211 7.57195 9.43449 7.6797Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1 12.4209H4.37076" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1.35352 12.4209V20.0709H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M4.26267 28.4755H1.35352V23.9502H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 7.68066H11.0508H34.8626V33.1087H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M11.4824 7.68027V2.93945H21.2873L21.3195 4.18077C21.3195 4.18077 19.1324 4.23241 19.2401 7.78802" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M21.2869 4.23238C21.2869 4.23238 20.9513 1.00043 22.0264 1.00061C24.4999 1.00104 25.5967 1 26.6742 1C27.5035 1 27.7517 1.43098 27.7517 1.96971C27.7517 2.1852 27.7517 2.29295 27.7517 2.61619V3.90912V4.23238H21.2869Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M29.6915 7.68047C29.6915 7.68047 29.7666 4.07338 27.5039 4.18113" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 11.1289H26.243V12.8528V29.5535H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8628 12.6367H26.2432" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 17.8076H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 22.7646H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 27.9365H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M16.1145 14.4678H20.2089L18.8082 17.5924H23.0103L15.899 26.4276L16.1145 25.4578L17.2998 20.9325H12.7744L16.1145 14.4678Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8625 7.68C34.8625 7.68 34.5393 5.95605 37.1252 5.95605C39.7111 5.95605 39.9266 7.68 39.9266 7.68V33.1081C39.9266 33.1081 40.0344 34.832 37.7717 34.832C35.4013 34.832 34.8625 34.7243 34.8625 33.1081" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.236 11.8818H39.8184H44.236Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2376 28.6914H39.9277" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.4658 11.6016V28.9172" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 25.3506H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 22.0107H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 18.6709H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 15.2227H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2373 16.8389H50.1633C50.7021 16.8389 51.133 17.2698 51.133 17.8086V22.2262C51.133 22.7649 50.7021 23.1959 50.1633 23.1959H44.2373" stroke="currentColor" strokeMiterlimit="10" />
        </svg>, title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.'
    }, {
        img: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 52 36" fill="none">
            <path d="M9.43449 7.6797V33.1078C9.43449 33.1078 4.2627 34.1852 4.2627 28.9057C4.2627 25.781 4.2627 16.2994 4.2627 12.205V10.6966C4.2627 10.3734 4.37045 10.0501 4.4782 9.72687C4.80144 8.75715 6.20211 7.57195 9.43449 7.6797Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1 12.4209H4.37076" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1.35352 12.4209V20.0709H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M4.26267 28.4755H1.35352V23.9502H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 7.68066H11.0508H34.8626V33.1087H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M11.4824 7.68027V2.93945H21.2873L21.3195 4.18077C21.3195 4.18077 19.1324 4.23241 19.2401 7.78802" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M21.2869 4.23238C21.2869 4.23238 20.9513 1.00043 22.0264 1.00061C24.4999 1.00104 25.5967 1 26.6742 1C27.5035 1 27.7517 1.43098 27.7517 1.96971C27.7517 2.1852 27.7517 2.29295 27.7517 2.61619V3.90912V4.23238H21.2869Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M29.6915 7.68047C29.6915 7.68047 29.7666 4.07338 27.5039 4.18113" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 11.1289H26.243V12.8528V29.5535H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8628 12.6367H26.2432" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 17.8076H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 22.7646H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 27.9365H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M16.1145 14.4678H20.2089L18.8082 17.5924H23.0103L15.899 26.4276L16.1145 25.4578L17.2998 20.9325H12.7744L16.1145 14.4678Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8625 7.68C34.8625 7.68 34.5393 5.95605 37.1252 5.95605C39.7111 5.95605 39.9266 7.68 39.9266 7.68V33.1081C39.9266 33.1081 40.0344 34.832 37.7717 34.832C35.4013 34.832 34.8625 34.7243 34.8625 33.1081" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.236 11.8818H39.8184H44.236Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2376 28.6914H39.9277" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.4658 11.6016V28.9172" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 25.3506H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 22.0107H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 18.6709H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 15.2227H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2373 16.8389H50.1633C50.7021 16.8389 51.133 17.2698 51.133 17.8086V22.2262C51.133 22.7649 50.7021 23.1959 50.1633 23.1959H44.2373" stroke="currentColor" strokeMiterlimit="10" />
        </svg>, title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.'
    }, {
        img: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 52 36" fill="none">
            <path d="M9.43449 7.6797V33.1078C9.43449 33.1078 4.2627 34.1852 4.2627 28.9057C4.2627 25.781 4.2627 16.2994 4.2627 12.205V10.6966C4.2627 10.3734 4.37045 10.0501 4.4782 9.72687C4.80144 8.75715 6.20211 7.57195 9.43449 7.6797Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1 12.4209H4.37076" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1.35352 12.4209V20.0709H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M4.26267 28.4755H1.35352V23.9502H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 7.68066H11.0508H34.8626V33.1087H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M11.4824 7.68027V2.93945H21.2873L21.3195 4.18077C21.3195 4.18077 19.1324 4.23241 19.2401 7.78802" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M21.2869 4.23238C21.2869 4.23238 20.9513 1.00043 22.0264 1.00061C24.4999 1.00104 25.5967 1 26.6742 1C27.5035 1 27.7517 1.43098 27.7517 1.96971C27.7517 2.1852 27.7517 2.29295 27.7517 2.61619V3.90912V4.23238H21.2869Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M29.6915 7.68047C29.6915 7.68047 29.7666 4.07338 27.5039 4.18113" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 11.1289H26.243V12.8528V29.5535H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8628 12.6367H26.2432" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 17.8076H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 22.7646H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 27.9365H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M16.1145 14.4678H20.2089L18.8082 17.5924H23.0103L15.899 26.4276L16.1145 25.4578L17.2998 20.9325H12.7744L16.1145 14.4678Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8625 7.68C34.8625 7.68 34.5393 5.95605 37.1252 5.95605C39.7111 5.95605 39.9266 7.68 39.9266 7.68V33.1081C39.9266 33.1081 40.0344 34.832 37.7717 34.832C35.4013 34.832 34.8625 34.7243 34.8625 33.1081" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.236 11.8818H39.8184H44.236Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2376 28.6914H39.9277" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.4658 11.6016V28.9172" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 25.3506H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 22.0107H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 18.6709H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 15.2227H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2373 16.8389H50.1633C50.7021 16.8389 51.133 17.2698 51.133 17.8086V22.2262C51.133 22.7649 50.7021 23.1959 50.1633 23.1959H44.2373" stroke="currentColor" strokeMiterlimit="10" />
        </svg>, title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.'
    }, {
        img: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 52 36" fill="none">
            <path d="M9.43449 7.6797V33.1078C9.43449 33.1078 4.2627 34.1852 4.2627 28.9057C4.2627 25.781 4.2627 16.2994 4.2627 12.205V10.6966C4.2627 10.3734 4.37045 10.0501 4.4782 9.72687C4.80144 8.75715 6.20211 7.57195 9.43449 7.6797Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1 12.4209H4.37076" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M1.35352 12.4209V20.0709H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M4.26267 28.4755H1.35352V23.9502H4.26267" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 7.68066H11.0508H34.8626V33.1087H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M11.4824 7.68027V2.93945H21.2873L21.3195 4.18077C21.3195 4.18077 19.1324 4.23241 19.2401 7.78802" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M21.2869 4.23238C21.2869 4.23238 20.9513 1.00043 22.0264 1.00061C24.4999 1.00104 25.5967 1 26.6742 1C27.5035 1 27.7517 1.43098 27.7517 1.96971C27.7517 2.1852 27.7517 2.29295 27.7517 2.61619V3.90912V4.23238H21.2869Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M29.6915 7.68047C29.6915 7.68047 29.7666 4.07338 27.5039 4.18113" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M9.43457 11.1289H26.243V12.8528V29.5535H9.43457" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8628 12.6367H26.2432" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 17.8076H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 22.7646H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M26.2432 27.9365H34.8628" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M16.1145 14.4678H20.2089L18.8082 17.5924H23.0103L15.899 26.4276L16.1145 25.4578L17.2998 20.9325H12.7744L16.1145 14.4678Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M34.8625 7.68C34.8625 7.68 34.5393 5.95605 37.1252 5.95605C39.7111 5.95605 39.9266 7.68 39.9266 7.68V33.1081C39.9266 33.1081 40.0344 34.832 37.7717 34.832C35.4013 34.832 34.8625 34.7243 34.8625 33.1081" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.236 11.8818H39.8184H44.236Z" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2376 28.6914H39.9277" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.4658 11.6016V28.9172" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 25.3506H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M39.9277 22.0107H44.2376" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 18.6709H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M40.0352 15.2227H44.2372" stroke="currentColor" strokeMiterlimit="10" />
            <path d="M44.2373 16.8389H50.1633C50.7021 16.8389 51.133 17.2698 51.133 17.8086V22.2262C51.133 22.7649 50.7021 23.1959 50.1633 23.1959H44.2373" stroke="currentColor" strokeMiterlimit="10" />
        </svg>, title: 'Structures Pipings', subtitle: 'Design and Construction of Offshore Structures, Analysis, Seafastening, Fabrication.'
    },]


function ServicesCard({ cardImage, cardTitle, cardSubtitle }: any) {
    const { isDarkMode }: any = useContext(Context)
    return (
        <div className={'w-full p-10 cursor-pointer card ' + (isDarkMode ? 'text-white bg-gray-450 hover:bg-blue-450 hover:text-white' : 'text-gray-450 bg-gray-150 hover:bg-blue-450 hover:text-white')} style={{ "outline": "1px solid rgba(0,0,0,.15)" }}>
            <div className="text-blue-450 cardImage">{cardImage}</div>
            <h3 className="mt-6 font-normal text-xl">{cardTitle}</h3>
            <p className="mt-5 mb-10 font-normal">{cardSubtitle}</p>
            <div className="flex text-gray-150 items-center justify-between font-normal">
                <h1>View</h1>
                <svg width="32" height="14" viewBox="0 0 33 16" fill="none"><path d="M32.0424 8.70711C32.4329 8.31658 32.4329 7.68342 32.0424 7.29289L25.6785 0.928932C25.2879 0.538408 24.6548 0.538408 24.2642 0.928932C23.8737 1.31946 23.8737 1.95262 24.2642 2.34315L29.9211 8L24.2642 13.6569C23.8737 14.0474 23.8737 14.6805 24.2642 15.0711C24.6548 15.4616 25.2879 15.4616 25.6785 15.0711L32.0424 8.70711ZM0 9H31.3353V7H0L0 9Z" fill="currentColor"></path></svg>
            </div>
        </div>
    )
}

export default function Services() {
    return (
        <div className='lg:px-16' id="services">
            <h1 className='title sm:mt-20 mt-10 sm:mb-16 mb-8'>Our Services</h1>
            <div className='lg:grid-cols-3 sm:grid-cols-2 md:grid hidden'>
                {cards.map((card: any, index: any) => {
                    return <ServicesCard
                        key={index}
                        cardImage={card.img}
                        cardTitle={card.title}
                        cardSubtitle={card.subtitle}
                    />
                })}
            </div>
            <div className='lg:grid-cols-3 sm:grid-cols-2 md:hidden grid'>
                {cards.slice(0, 4).map((card: any, index: any) => {
                    return <ServicesCard
                        key={index}
                        cardImage={card.img}
                        cardTitle={card.title}
                        cardSubtitle={card.subtitle}
                    />
                })}
            </div>
        </div>
    )
}