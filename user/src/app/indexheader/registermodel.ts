import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';

export class DataRegister {
    public NamaPenyewa : string;
	public AlamatPenyewa : string;
	public Email : string;
	public NoTelp : string;
    public UserNamePenyewa : string;
	public PasswordPenyewa : string;
}