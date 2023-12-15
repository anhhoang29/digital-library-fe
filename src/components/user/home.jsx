import { React, useEffect, useRef, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import UserRoutes from '../routers/UserRouters';


const UserHome = () => {

    return (
         
      <div className="relative bg-white w-full h-[1355px] text-left text-xl text-dimgray font-inter">
        <main className="absolute top-[-67px] left-[-37px] w-[1994.32px] h-[1143.47px]">
          <img
            className="absolute top-[64.34px] left-[37px] w-[1917px] h-[1086.66px] object-cover hidden"
            alt=""
            src="/vector-1@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] w-[1994.32px] h-[1143.47px] object-cover"
            alt=""
            src="/vector-2@2x.png"
          />
        </main>
        <div className="absolute top-[48px] left-[343px] rounded-tl-none rounded-tr-3xs rounded-b-none w-[1544px] h-[994px] overflow-y-auto text-6xl">
          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 w-[1544px] h-[2313px]" />
          <div className="absolute top-[850px] left-[44px] leading-[128.52%] inline-block w-[228px] h-[34px]">
            Recent Readings
          </div>
          <div className="absolute top-[850px] left-[1353px] text-xl leading-[128.52%] text-gray text-right inline-block w-[143px] h-[34px]">
            Show All
          </div>
          <div className="absolute top-[1218px] left-[44px] leading-[128.52%] inline-block w-[238px] h-[34px]">
            Academic Books
          </div>
          <div className="absolute top-[1208px] left-[1354px] text-xl leading-[128.52%] text-gray text-right inline-block w-[143px] h-[34px]">
            Show All
          </div>
          <div className="absolute top-[1586px] left-[1354px] text-xl leading-[128.52%] text-gray text-right inline-block w-[143px] h-[34px]">
            Show All
          </div>
          <div className="absolute top-[1586px] left-[44px] leading-[128.52%] text-gray inline-block w-[513px] h-[34px]">{`Journals, Articles & Paper Publications`}</div>
          <div className="absolute top-[1958px] left-[44px] leading-[128.52%] text-gray inline-block w-[513px] h-[34px]">
            News
          </div>
          <div className="absolute top-[527px] left-[44px] overflow-x-auto flex flex-row items-start justify-start gap-[39px] text-3xs">
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[16px] left-[20px] rounded-8xs w-[123px] h-[170px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Don’t Make Me think
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Steve Krug, 2000
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  The Design of Every..
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Don Norman, 1988
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Sprint : How to solve...
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Jake Knapp, 2000
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Learn UX : Design Gr...
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Jeff Gothelf, 2016
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  The Road to React
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Steve Krug, 2000
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Rich Dad Poor Dad
                </div>
                <div className="relative leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Robert T.Kiyosaki, 1997
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Harry Potter and The...
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  J.K. Rowling, 2002
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.9</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px]">
                  You Don’t Know JS: S..
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Kyle Simpson, 2014
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.9</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[895px] left-[44px] flex flex-row items-start justify-start gap-[39px] text-3xs">
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[16px] left-[20px] rounded-8xs w-[123px] h-[170px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Don’t Make Me think
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Steve Krug, 2000
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  The Design of Every..
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Don Norman, 1988
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Sprint : How to solve...
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Jake Knapp, 2000
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Learn UX : Design Gr...
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Jeff Gothelf, 2016
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  The Road to React
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Steve Krug, 2000
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Rich Dad Poor Dad
                </div>
                <div className="relative leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Robert T.Kiyosaki, 1997
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Harry Potter and The ...
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  J.K. Rowling, 2002
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.9</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  You Don’t Know JS: S..
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Kyle Simpson, 2014
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.9</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[1263px] left-[44px] flex flex-row items-start justify-start gap-[39px] text-3xs">
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[16px] left-[20px] rounded-8xs w-[123px] h-[170px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Don’t Make Me think
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Steve Krug, 2000
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  The Design of Every..
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Don Norman, 1988
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Sprint : How to solve...
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Jake Knapp, 2000
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Learn UX : Design Gr...
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Jeff Gothelf, 2016
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  The Road to React
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Steve Krug, 2000
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Rich Dad Poor Dad
                </div>
                <div className="relative leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Robert T.Kiyosaki, 1997
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Harry Potter and The ...
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  J.K. Rowling, 2002
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.9</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  You Don’t Know JS: S..
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Kyle Simpson, 2014
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.9</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[1631px] left-[44px] flex flex-row items-start justify-start gap-[39px] text-3xs">
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[16px] left-[20px] rounded-8xs w-[123px] h-[170px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Don’t Make Me think
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Steve Krug, 2000
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  The Design of Every..
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Don Norman, 1988
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Sprint : How to solve...
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Jake Knapp, 2000
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Learn UX : Design Gr...
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Jeff Gothelf, 2016
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  The Road to React
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Steve Krug, 2000
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Rich Dad Poor Dad
                </div>
                <div className="relative leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Robert T.Kiyosaki, 1997
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  Harry Potter and The ...
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  J.K. Rowling, 2002
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.9</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  You Don’t Know JS: S..
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Kyle Simpson, 2014
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.9</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[2003px] left-[44px] flex flex-row items-start justify-start gap-[39px] text-3xs">
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[16px] left-[20px] rounded-8xs w-[123px] h-[170px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  14 Mar 2023
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  The Hindu News
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[16px] left-[20px] rounded-8xs w-[123px] h-[170px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  14 Mar 2023
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  TOI News
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xs bg-white w-40 h-[260px] overflow-hidden shrink-0">
              <img
                className="absolute top-[16px] left-[20px] rounded-8xs w-[123px] h-[170px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="absolute top-[198px] left-[15px] flex flex-col items-start justify-start gap-[5px]">
                <div className="relative text-xs leading-[128.52%] inline-block w-[130px] h-3.5 shrink-0">
                  14 Mar 2023
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-3.5 shrink-0">
                  Deccan Cronicle
                </div>
                <div className="relative leading-[128.52%] inline-block w-[101px] h-[11px] shrink-0">
                  <span>4.5</span>
                  <span className="text-darkgray">/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[413px] left-[44px] text-[35px] leading-[128.52%] font-semibold inline-block w-[268px] h-[45px]">
            Good Morning
          </div>
          <div className="absolute top-[482px] left-[44px] leading-[128.52%] inline-block w-[286px] h-[33px]">
            Recommended for You
          </div>
          <div className="absolute top-[482px] left-[1367px] text-xl leading-[128.52%] text-gray text-right inline-block w-[129px] h-[33px]">
            Show All
          </div>
          <div className="absolute top-[136px] left-[634px] rounded-3xs bg-white box-border w-[863px] h-[235px] overflow-hidden text-white border-[1px] border-solid border-tomato">
            <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs [background:linear-gradient(rgba(0,_0,_0,_0.1),_rgba(0,_0,_0,_0.1)),_linear-gradient(182.98deg,_#eb5231,_#571fcf)] w-[58px] h-[233px]" />
            <div className="absolute top-[0px] left-[13px] w-[848px] h-[229px]">
              <div className="absolute top-[193px] left-[0px] leading-[128.52%] font-medium inline-block w-[157px] h-8 [transform:_rotate(-90deg)] [transform-origin:0_0]">
                New Arrivals
              </div>
              <div className="absolute top-[0px] left-[45px] w-[803px] h-[229px] overflow-x-auto">
                <div className="absolute top-[13px] left-[35px] flex flex-row items-start justify-start gap-[48px]">
                  <div className="relative rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[167px] h-[203px] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[16px] left-[22px] rounded-8xs w-[123px] h-[170px] object-cover"
                      alt=""
                      src="/rectangle-12@2x.png"
                    />
                  </div>
                  <div className="relative rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[167px] h-[203px] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[15px] left-[19px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                      alt=""
                      src="/rectangle-12@2x.png"
                    />
                  </div>
                  <div className="relative rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[167px] h-[203px] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[15px] left-[19px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                      alt=""
                      src="/rectangle-12@2x.png"
                    />
                  </div>
                  <div className="relative rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[167px] h-[203px] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                      alt=""
                      src="/rectangle-12@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[229px] left-[13px] w-[848px] h-[233px] text-center">
              <div className="absolute top-[197px] left-[0px] leading-[128.52%] font-medium inline-block w-[157px] h-8 [transform:_rotate(-90deg)] [transform-origin:0_0]">
                News Rack
              </div>
              <div className="absolute top-[0px] left-[45px] w-[803px] h-[233px] overflow-x-auto">
                <div className="absolute top-[14px] left-[35px] flex flex-row items-start justify-start gap-[48px]">
                  <div className="relative rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[167px] h-[203px] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[16px] left-[22px] rounded-8xs w-[123px] h-[170px] object-cover"
                      alt=""
                      src="/rectangle-12@2x.png"
                    />
                  </div>
                  <div className="relative rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[167px] h-[203px] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[15px] left-[19px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                      alt=""
                      src="/rectangle-12@2x.png"
                    />
                  </div>
                  <div className="relative rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[167px] h-[203px] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[15px] left-[19px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                      alt=""
                      src="/rectangle-12@2x.png"
                    />
                  </div>
                  <div className="relative rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[167px] h-[203px] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[15px] left-[15px] rounded-8xs w-[130px] h-[171.83px] object-cover"
                      alt=""
                      src="/rectangle-12@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[137px] left-[44px] rounded-3xs [background:linear-gradient(rgba(0,_0,_0,_0.1),_rgba(0,_0,_0,_0.1)),_linear-gradient(140.88deg,_#eb5231,_#571fcf)] w-[547px] h-[233px] overflow-hidden text-xl text-white">
            <div className="absolute top-[33px] left-[23px] w-[500px] h-[168px]">
              <div className="absolute top-[0px] left-[13px] text-6xl leading-[128.52%] font-medium inline-block w-48 h-[41px]">
                Today’s Quote
              </div>
              <div className="absolute top-[52px] left-[13px] leading-[150%] inline-block w-[487px] h-[70px]">
                “There is more treasure in books than in all the pirate’s loot on
                Treasure Island.”
              </div>
              <div className="absolute top-[137px] left-[0px] leading-[128.52%] text-right inline-block w-[487px] h-[31px]">
                -Walt Disney
              </div>
            </div>
            <div className="absolute top-[196px] left-[36px] w-[70px] flex flex-row items-end justify-between">
              <div className="relative rounded-[50%] bg-white box-border w-2.5 h-2.5 border-[1px] border-solid border-white" />
              <div className="relative rounded-[50%] bg-purple box-border w-2.5 h-2.5 border-[1px] border-solid border-white" />
              <div className="relative rounded-[50%] bg-purple box-border w-2.5 h-2.5 border-[1px] border-solid border-white" />
              <div className="relative rounded-[50%] bg-purple box-border w-2.5 h-2.5 border-[1px] border-solid border-white" />
            </div>
          </div>
        </div>
        <div className="absolute top-[48px] left-[343px] w-[1544px] h-28 text-center">
          <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-b-none [background:linear-gradient(180deg,_#fff,_#f3f3f7_66.67%,_rgba(243,_243,_247,_0.88))] w-[1544px] h-28 overflow-hidden" />
          <div className="absolute top-[38px] left-[821px] w-[455px] h-[46px] text-mini font-digital-numbers">
            <div className="absolute top-[0px] left-[0px] rounded-21xl bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[455px] h-[46px]" />
            <div className="absolute top-[14px] left-[57px] flex flex-row items-start justify-start gap-[5px]">
              <img
                className="relative w-[19px] h-[19px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/time@2x.png"
              />
              <div className="relative tracking-[-0.04em] leading-[128.52%] inline-block w-[109px] h-[19px] shrink-0">
                09:00 AM
              </div>
            </div>
            <div className="absolute top-[14px] left-[256px] flex flex-row items-start justify-start gap-[5px]">
              <img
                className="relative w-[19px] h-[18.98px] object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <div className="relative tracking-[-0.04em] leading-[128.52%] inline-block w-[125px] h-[19px] shrink-0">
                4-Mar-2023
              </div>
            </div>
          </div>
          <div className="absolute top-[38px] left-[622px] w-[170px] h-[47px]">
            <div className="absolute top-[0px] left-[0px] rounded-[30px] bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[170px] h-[47px]" />
            <img
              className="absolute top-[14px] left-[25px] w-5 h-5 overflow-hidden object-cover"
              alt=""
              src="/translate@2x.png"
            />
            <div className="absolute top-[12px] left-[40px] leading-[128.52%] inline-block w-[91px] h-[22.12px]">
              Lang
            </div>
            <img
              className="absolute top-[19px] left-[124px] rounded-12xs w-[17px] h-[9px] object-cover"
              alt=""
              src="/polygon-1@2x.png"
            />
          </div>
          <div className="absolute top-[38px] left-[1305px] w-[203px] h-[50px] text-left">
            <div className="absolute top-[0px] left-[0px] rounded-[33px] bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[203px] h-[50px]" />
            <img
              className="absolute top-[3px] left-[3px] rounded-[50%] w-[45px] h-[45px] object-cover"
              alt=""
              src="/ellipse-10@2x.png"
            />
            <div className="absolute top-[14px] left-[68px] leading-[128.52%] inline-block w-[134px] h-[27px]">
              Hoang Anh
            </div>
            <img
              className="absolute top-[21px] left-[159px] rounded-12xs w-[17px] h-[9px] object-cover"
              alt=""
              src="/polygon-1@2x.png"
            />
          </div>
          <div className="absolute top-[38px] left-[46px] w-[541px] h-[49px] text-left">
            <div className="absolute top-[0px] left-[0px] rounded-21xl bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] w-[541px] h-[49px]" />
            <div className="absolute top-[0px] left-[0px] w-[102px] h-[49px]">
              <div className="absolute top-[0px] left-[0px] rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl bg-whitesmoke-100 w-[102px] h-[49px]" />
              <div className="absolute top-[12px] left-[39px] leading-[128.52%] inline-block w-[27px] h-6">
                All
              </div>
              <img
                className="absolute top-[20px] left-[76px] rounded-12xs w-[17px] h-[9px] object-cover"
                alt=""
                src="/polygon-1@2x.png"
              />
            </div>
            <img
              className="absolute top-[14px] left-[509px] w-5 h-5 overflow-hidden object-cover"
              alt=""
              src="/barcode-scanner@2x.png"
            />
            <img
              className="absolute top-[15px] left-[469px] w-5 h-5 overflow-hidden object-cover"
              alt=""
              src="/search@2x.png"
            />
            <div className="absolute top-[7.5px] left-[497.5px] box-border w-px h-[34px] border-r-[1px] border-solid border-gainsboro" />
            <div className="absolute top-[12px] left-[125px] leading-[128.52%] text-silver inline-block w-[229px] h-6">
              Search
            </div>
          </div>
        </div>
        <div className="absolute top-[48px] left-[35px] w-[306px] h-[994px] text-gray">
          <div className="absolute top-[0px] left-[0px] w-[306px] h-[994px]">
            <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-white w-[306px] h-[994px] overflow-hidden" />
            <div className="absolute top-[212px] left-[66px] flex flex-col items-center justify-start">
              <div className="shrink-0 flex flex-col items-center justify-start gap-[34px]">
                <div className="w-[174px] shrink-0 flex flex-row items-center justify-start gap-[12px] text-dimgray">
                  <img
                    className="relative w-[23px] h-[23px] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/heroiconsminihome@2x.png"
                  />
                  <div className="relative inline-block w-[138px] h-[25px] shrink-0">
                    Home
                  </div>
                </div>
                <div className="shrink-0 flex flex-row items-center justify-start gap-[11px]">
                  <img
                    className="relative w-[23px] h-[23px] object-cover"
                    alt=""
                    src="/search@2x.png"
                  />
                  <div className="relative inline-block w-[137px] h-[25px] shrink-0">
                    Search
                  </div>
                </div>
                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/bookshelf@2x.png"
                  />
                  <div className="relative inline-block w-[136px] h-[25px] shrink-0">
                    My Shelf
                  </div>
                </div>
                <div className="w-[169px] shrink-0 flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-[21px] h-[21px] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/give-gift@2x.png"
                  />
                  <div className="relative inline-block w-[137px] h-[25px] shrink-0">
                    Contribute
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[38px] left-[68px] w-[120px] h-[74.18px]">
              <img
                className="absolute top-[0px] left-[0px] w-[120px] h-[74.18px] object-cover"
                alt=""
                src="/logo-1@2x.png"
              />
            </div>
            <div>
                <UserRoutes />
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserHome;
