import { React, useState } from 'react';

import logo from '../assets/images/logo.png';

// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import StatusCard from '../management/status-card/StatusCard';
// import Table from '../management/table/Table';
// import { getLatestDocuments } from '../../api/main/documentAPI';
// import { getGeneralStatistics } from '../../api/main/statisticsAPI';
// import { getLatestUsers } from '../../api/main/userAPI';
// import usePrivateAxios from '../../api/usePrivateAxios';
// import Chart from 'react-apexcharts';
// import { Container, Grid, Theme } from '@material-ui/core';
// import { createStyles, makeStyles } from '@material-ui/styles';
// import { NextPage } from 'next';
// import Head from 'next/head';
// import Navbar from '../components/navbar/Navbar';
// import Borrow from '../components/profile/Borrow';


function UserHome() {

    // const [documents, setDocuments] = useState([]);
    // const [users, setUsers] = useState([]);
    // const [statistics, setStatistics] = useState({});
    // const [isLoading, setIsLoading] = useState(false);
    // const [message, setMessage] = useState("");

    // const user = useSelector((state) => state.user);


    return (
        <div className="w-[1938px] h-[1355px] relative bg-white">
            <div className="w-[1994.32px] h-[1143.47px] left-[-37px] top-[-67px] absolute">
            </div>
            <div className="w-[1544px] h-[994px] left-[343px] top-[48px] absolute rounded-tr-[10px]">
                <div className="w-[1544px] h-[2313px] left-0 top-0 absolute bg-gray-100 rounded-tr-[10px] rounded-br-[10px]" />
                <div className="w-[228px] h-[34px] left-[44px] top-[850px] absolute text-neutral-600 text-[25px] font-normal font-['Inter'] leading-loose">Recent Readings</div>
                <div className="w-[143px] h-[34px] left-[1353px] top-[850px] absolute text-right text-zinc-500 text-xl font-normal font-['Inter'] leading-relaxed">Show All</div>
                <div className="w-[238px] h-[34px] left-[44px] top-[1218px] absolute text-neutral-600 text-[25px] font-normal font-['Inter'] leading-loose">Academic Books</div>
                <div className="w-[143px] h-[34px] left-[1354px] top-[1208px] absolute text-right text-zinc-500 text-xl font-normal font-['Inter'] leading-relaxed">Show All</div>
                <div className="w-[143px] h-[34px] left-[1354px] top-[1586px] absolute text-right text-zinc-500 text-xl font-normal font-['Inter'] leading-relaxed">Show All</div>
                <div className="w-[513px] h-[34px] left-[44px] top-[1586px] absolute text-zinc-500 text-[25px] font-normal font-['Inter'] leading-loose">Journals, Articles & Paper Publications</div>
                <div className="w-[513px] h-[34px] left-[44px] top-[1958px] absolute text-zinc-500 text-[25px] font-normal font-['Inter'] leading-loose">News</div>
                <div className="left-[44px] top-[527px] absolute justify-start items-start gap-[39px] inline-flex">
                    <div className="px-[15px] pt-4 pb-[13px] bg-white rounded-[10px] flex-col justify-center items-center gap-3 inline-flex">
                        <img className="w-[123px] h-[170px] rounded-[5px]" src="https://via.placeholder.com/123x170" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5', color: '#6B7280', fontSize: 'xs', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                Don’t Make Me think
                            </div>
                            <div style={{ width: '101px', height: '3.5', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Steve Krug, 2000
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5', color: '#6B7280', fontSize: 'xs', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                The Design of Every..
                            </div>
                            <div style={{ width: '101px', height: '3.5', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Don Norman, 1988
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5', color: '#6B7280', fontSize: 'xs', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                The Design of Every..
                            </div>
                            <div style={{ width: '101px', height: '3.5', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Don Norman, 1988
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5', color: '#6B7280', fontSize: 'xs', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                The Design of Every..
                            </div>
                            <div style={{ width: '101px', height: '3.5', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Don Norman, 1988
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5', color: '#6B7280', fontSize: 'xs', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                The Design of Every..
                            </div>
                            <div style={{ width: '101px', height: '3.5', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Don Norman, 1988
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5', color: '#6B7280', fontSize: 'xs', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                The Design of Every..
                            </div>
                            <div style={{ width: '101px', height: '3.5', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Don Norman, 1988
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5', color: '#6B7280', fontSize: 'xs', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                The Design of Every..
                            </div>
                            <div style={{ width: '101px', height: '3.5', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Don Norman, 1988
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5', color: '#6B7280', fontSize: 'xs', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                The Design of Every..
                            </div>
                            <div style={{ width: '101px', height: '3.5', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Don Norman, 1988
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left-[44px] top-[895px] absolute justify-start items-start gap-[39px] inline-flex">
                    <div className="px-[15px] pt-4 pb-[13px] bg-white rounded-[10px] flex-col justify-center items-center gap-3 inline-flex">
                        <img className="w-[123px] h-[170px] rounded-[5px]" src="https://via.placeholder.com/123x170" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                Don’t Make Me think
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Steve Krug, 2000
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                The Design of Every..
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Don Norman, 1988
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                The Design of Every..
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Don Norman, 1988
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                The Design of Every..
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Don Norman, 1988
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                The Design of Every..
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Don Norman, 1988
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                The Design of Every..
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Don Norman, 1988
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                The Design of Every..
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Don Norman, 1988
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                The Design of Every..
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Don Norman, 1988
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left-[44px] top-[1263px] absolute justify-start items-start gap-[39px] inline-flex">

                    <div className="px-[15px] pt-4 pb-[13px] bg-white rounded-[10px] flex-col justify-center items-center gap-3 inline-flex">
                        <img className="w-[123px] h-[170px] rounded-[5px]" src="https://via.placeholder.com/123x170" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                Don’t Make Me think
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Steve Krug, 2000
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                The Design of Every..
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Don Norman, 1988
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                Sprint: How to solve...
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Jake Knapp, 2000
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                Sprint: How to solve...
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Jake Knapp, 2000
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                Sprint: How to solve...
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Jake Knapp, 2000
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                Sprint: How to solve...
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Jake Knapp, 2000
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                Sprint: How to solve...
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Jake Knapp, 2000
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                Sprint: How to solve...
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Jake Knapp, 2000
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left-[44px] top-[1631px] absolute justify-start items-start gap-[39px] inline-flex">

                    <div className="px-[15px] pt-4 pb-[13px] bg-white rounded-[10px] flex-col justify-center items-center gap-3 inline-flex">
                        <img className="w-[123px] h-[170px] rounded-[5px]" src="https://via.placeholder.com/123x170" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                Don’t Make Me think
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Steve Krug, 2000
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>


                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                The Design of Every..
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Don Norman, 1988
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                Sprint: How to solve...
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Jake Knapp, 2000
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                Sprint: How to solve...
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Jake Knapp, 2000
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                Sprint: How to solve...
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Jake Knapp, 2000
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                Sprint: How to solve...
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Jake Knapp, 2000
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                Sprint: How to solve...
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Jake Knapp, 2000
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-40 px-[15px] pt-[15px] pb-[13px] bg-white rounded-[10px] flex-col justify-center items-start gap-[11.17px] inline-flex">
                        <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                Sprint: How to solve...
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Jake Knapp, 2000
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left-[44px] top-[2003px] absolute justify-start items-start gap-[39px] inline-flex">
    
                    <div className="px-[15px] pt-4 pb-[13px] bg-white rounded-[10px] flex-col justify-center items-center gap-3 inline-flex">
                        <img className="w-[123px] h-[170px] rounded-[5px]" src="https://via.placeholder.com/123x170" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                14 Mar 2023
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                The Hindu News
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>


                    <div className="px-[15px] pt-4 pb-[13px] bg-white rounded-[10px] flex-col justify-center items-center gap-3 inline-flex">
                        <img className="w-[123px] h-[170px] rounded-[5px]" src="https://via.placeholder.com/123x170" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                14 Mar 2023
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                TOI News
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>


                    <div className="px-[15px] pt-4 pb-[13px] bg-white rounded-[10px] flex-col justify-center items-center gap-3 inline-flex">
                        <img className="w-[123px] h-[170px] rounded-[5px]" src="https://via.placeholder.com/123x170" alt="Ảnh mô phỏng" />
                        <div className="self-stretch flex-col justify-start items-start gap-[5px] inline-flex">
                            <div style={{ width: '130px', height: '3.5rem', color: '#6B7280', fontSize: '0.75rem', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: 'none' }}>
                                14 Mar 2023
                            </div>
                            <div style={{ width: '101px', height: '3.5rem', color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>
                                Deccan Chronicle
                            </div>
                            <div className="w-[101px] h-[11px]">
                                <span style={{ color: '#6B7280', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>4.5</span>
                                <span style={{ color: '#9CA3AF', fontSize: '10px', fontWeight: 'normal', fontFamily: 'Inter', lineHeight: '12.85px' }}>/5</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-[268px] h-[45px] left-[44px] top-[413px] absolute text-neutral-600 text-[35px] font-semibold font-['Inter'] leading-[44.98px]">Good Morning</div>
                <div className="w-[286px] h-[33px] left-[44px] top-[482px] absolute text-neutral-600 text-[25px] font-normal font-['Inter'] leading-loose">Recommended for You</div>
                <div className="w-[129px] h-[33px] left-[1367px] top-[482px] absolute text-right text-zinc-500 text-xl font-normal font-['Inter'] leading-relaxed">Show All</div>
                <div className="w-[861px] h-[233px] left-[635px] top-[137px] absolute bg-white rounded-[10px] border border-red-500">
                    <div className="w-[58px] h-[233px] left-0 top-0 absolute bg-black bg-opacity-10 rounded-tl-[10px] rounded-bl-[10px]" />
                    <div className="w-[848px] left-[13px] top-0 absolute">
                        <div className="w-[157px] h-8 left-0 top-[193px] absolute origin-top-left -rotate-90 text-white text-[25px] font-medium font-['Inter'] leading-loose">New Arrivals</div>
                        <div className="w-[803px] h-[229px] pl-[35px] py-[13px] left-[45px] top-0 absolute justify-end items-center inline-flex">
                            <div className="self-stretch justify-start items-start gap-12 inline-flex">
                                <div className="w-[167px] h-[203px] px-[22px] pt-4 pb-[17px] bg-white rounded-[10px] shadow flex-col justify-center items-center inline-flex">
                                    <img className="w-[123px] h-[170px] rounded-[5px]" src="https://via.placeholder.com/123x170" />
                                </div>
                                <div className="w-[167px] h-[203px] pl-[19px] pr-[18px] pt-[15px] pb-[16.17px] bg-white rounded-[10px] shadow flex-col justify-center items-center inline-flex">
                                    <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" />
                                </div>
                                <div className="w-[167px] h-[203px] pl-[19px] pr-[18px] pt-[15px] pb-[16.17px] bg-white rounded-[10px] shadow flex-col justify-center items-center inline-flex">
                                    <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" />
                                </div>
                                <div className="h-[203px] pl-[15px] pr-[22px] pt-[15px] pb-[16.17px] bg-white rounded-[10px] shadow flex-col justify-center items-center inline-flex">
                                    <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[848px] h-[233px] left-[13px] top-[229px] absolute">
                        <div className="w-[157px] h-8 left-0 top-[197px] absolute origin-top-left -rotate-90 text-center text-white text-[25px] font-medium font-['Inter'] leading-loose">News Rack</div>
                        <div className="w-[803px] h-[233px] pl-[35px] pt-3.5 pb-4 left-[45px] top-0 absolute justify-end items-center inline-flex">
                            <div className="self-stretch justify-start items-start gap-12 inline-flex">
                                <div className="w-[167px] h-[203px] px-[22px] pt-4 pb-[17px] bg-white rounded-[10px] shadow flex-col justify-center items-center inline-flex">
                                    <img className="w-[123px] h-[170px] rounded-[5px] border border-neutral-200" src="https://via.placeholder.com/123x170" />
                                </div>
                                <div className="w-[167px] h-[203px] pl-[19px] pr-[18px] pt-[15px] pb-[16.17px] bg-white rounded-[10px] shadow flex-col justify-center items-center inline-flex">
                                    <img className="w-[130px] h-[171.83px] rounded-[5px] border border-neutral-200" src="https://via.placeholder.com/130x172" />
                                </div>
                                <div className="w-[167px] h-[203px] pl-[19px] pr-[18px] pt-[15px] pb-[16.17px] bg-white rounded-[10px] shadow flex-col justify-center items-center inline-flex">
                                    <img className="w-[130px] h-[171.83px] rounded-[5px] border border-neutral-200" src="https://via.placeholder.com/130x172" />
                                </div>
                                <div className="h-[203px] pl-[15px] pr-[22px] pt-[15px] pb-[16.17px] bg-white rounded-[10px] shadow flex-col justify-center items-center inline-flex">
                                    <img className="w-[130px] h-[171.83px] rounded-[5px]" src="https://via.placeholder.com/130x172" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[547px] h-[233px] left-[44px] top-[137px] absolute bg-black bg-opacity-10 rounded-[10px]">
                    <div className="w-[500px] h-[168px] left-[23px] top-[33px] absolute">
                        <div className="w-48 h-[41px] left-[13px] top-0 absolute text-white text-[25px] font-medium font-['Inter'] leading-loose">Today’s Quote</div>
                        <div className="w-[487px] h-[70px] left-[13px] top-[52px] absolute text-white text-xl font-normal font-['Inter'] leading-[30px]">“There is more treasure in books than in all the pirate’s loot on Treasure Island.”</div>
                        <div className="w-[487px] h-[31px] left-0 top-[137px] absolute text-right text-white text-xl font-normal font-['Inter'] leading-relaxed">-Walt Disney</div>
                    </div>
                    <div className="w-[70px] left-[36px] top-[196px] absolute justify-between items-end inline-flex">
                        <div className="w-2.5 h-2.5 bg-white rounded-full border border-white" />
                        <div className="w-2.5 h-2.5 bg-fuchsia-800 rounded-full border border-white" />
                        <div className="w-2.5 h-2.5 bg-fuchsia-800 rounded-full border border-white" />
                        <div className="w-2.5 h-2.5 bg-fuchsia-800 rounded-full border border-white" />
                    </div>
                </div>
            </div>
            <div className="w-[1544px] h-28 left-[343px] top-[48px] absolute">
                <div className="w-[1544px] h-28 left-0 top-0 absolute bg-gradient-to-b from-white via-gray-100 to-gray-100 rounded-tr-[10px] border" />
                <div className="w-[455px] h-[46px] left-[821px] top-[38px] absolute">
                    <div className="w-[455px] h-[46px] left-0 top-0 absolute bg-white rounded-[40px] shadow shadow-inner" />
                    <div className="w-[133px] h-[19px] left-[57px] top-[14px] absolute justify-start items-start gap-[5px] inline-flex">
                        <div className="w-[19px] h-[19px] relative" />
                        <div className="w-[109px] h-[19px] text-center text-neutral-600 text-[15px] font-normal font-['Digital Numbers'] leading-tight">09:00 AM</div>
                    </div>
                    <div className="w-[149px] h-[19px] left-[256px] top-[14px] absolute justify-start items-start gap-[5px] inline-flex">
                        <div className="w-[125px] h-[19px] text-center text-neutral-600 text-[15px] font-normal font-['Digital Numbers'] leading-tight">4-Mar-2023</div>
                    </div>
                </div>
                <div className="w-[170px] h-[47px] left-[622px] top-[38px] absolute">
                    <div className="w-[170px] h-[47px] left-0 top-0 absolute bg-white rounded-[30px] shadow" />
                    <div className="w-5 h-5 left-[25px] top-[14px] absolute" />
                    <div className="w-[91px] h-[22.12px] left-[40px] top-[12px] absolute text-center text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Lang</div>
                </div>
                <div className="w-[203px] h-[50px] left-[1305px] top-[38px] absolute">
                    <div className="w-[203px] h-[50px] left-0 top-0 absolute bg-white rounded-[33px] shadow" />
                    <img className="w-[45px] h-[45px] left-[3px] top-[3px] absolute rounded-full border border-white" src="https://via.placeholder.com/45x45" />
                    <div className="w-[134px] h-[27px] left-[68px] top-[14px] absolute text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Kenson</div>
                </div>
                <div className="w-[541px] h-[49px] left-[46px] top-[38px] absolute">
                    <div className="w-[541px] h-[49px] left-0 top-0 absolute bg-white rounded-[40px] shadow" />
                    <div className="w-[102px] h-[49px] left-0 top-0 absolute">
                        <div className="w-[102px] h-[49px] left-0 top-0 absolute bg-gray-50 rounded-tl-[40px] rounded-bl-[40px]" />
                        <div className="w-[27px] h-6 left-[39px] top-[12px] absolute text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">All</div>
                    </div>
                    <div className="w-5 h-5 left-[509px] top-[14px] absolute" />
                    <div className="w-5 h-5 left-[469px] top-[15px] absolute" />
                    <div className="w-[33px] h-[0px] left-[498px] top-[8px] absolute origin-top-left rotate-90 border border-zinc-300"></div>
                    <div className="w-[229px] h-6 left-[125px] top-[12px] absolute text-stone-300 text-xl font-normal font-['Inter'] leading-relaxed">Search</div>
                </div>
            </div>
            <div className="w-[306px] h-[994px] left-[35px] top-[48px] absolute flex-col justify-center items-center inline-flex">
                <div className="w-[306px] h-[994px] relative">
                    <div className="w-[306px] h-[994px] left-0 top-0 absolute bg-white rounded-tl-[10px] rounded-bl-[10px]" />
                    <div className="w-[174px] h-[202px] left-[66px] top-[212px] absolute flex-col justify-start items-center gap-[34px] inline-flex">
                        <div className="flex-col justify-start items-center gap-[34px] flex">
                            <div className="w-[174px] justify-start items-center gap-3 inline-flex">
                                <div className="w-[23px] h-[23px] relative" />
                                <div className="w-[138px] h-[25px] text-neutral-600 text-xl font-normal font-['Inter']">Home</div>
                            </div>
                            <div className="justify-start items-center gap-[11px] inline-flex">
                                <div className="w-[23px] h-[23px] relative">
                                    <div className="w-[23px] h-[23px] left-0 top-0 absolute bg-zinc-300" />
                                </div>
                                <div className="w-[137px] h-[25px] text-zinc-500 text-xl font-normal font-['Inter']">Search</div>
                            </div>
                            <div className="justify-start items-center gap-3 inline-flex">
                                <div className="w-5 h-5 relative" />
                                <div className="w-[136px] h-[25px] text-zinc-500 text-xl font-normal font-['Inter']">My Shelf</div>
                            </div>
                            <div className="w-[169px] justify-start items-center gap-3 inline-flex">
                                <div className="w-[21px] h-[21px] relative" />
                                <div className="w-[137px] h-[25px] text-zinc-500 text-xl font-normal font-['Inter']">Contribute</div>
                            </div>
                        </div>
                    </div>
                    <img className="w-[120px] h-[74.18px] left-[68px] top-[38px] absolute" src="https://via.placeholder.com/120x74" />
                </div>
            </div>
        </div>
    );

}

export default UserHome;