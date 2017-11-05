import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';

export class Data {
    public KdDataSewa : string;
	public UserNamePegawai : string;
	public UserNamePenyewa : string;
	public KdBarang : string;
    public StatusDataSewa : string;
    public TglMulai : Date;
    public TglSelesai : Date;
    public JumlahBarang : Number;
}