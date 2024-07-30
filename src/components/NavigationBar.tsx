import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowDown from '/@/images/svg/arrow-down.svg';
import { Link } from 'react-router-dom';
const ListItem = styled.li`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-family: 'PingFang', sans-serif;
  a:hover {
    background-color: oklch(var(--s));
    border-radius: 9999px;
  }
  a:active {
    background-color: oklch(var(--s));
    border-radius: 9999px;
  }
  a:focus {
    background-color: oklch(var(--s));
    border-radius: 9999px;
  }
`;

function NavigationBar() {
  return (
    <div className="navbar bg-base-100 min-h-20 shadow-xl">
      {/* 手機版 */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>排行榜</a>
            </li>
            <li>
              <a>分類</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>活動資訊</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="italic font-bold text-xl pl-2 cursor-pointer">
          Clean Mind
        </Link>
      </div>
      {/* 電腦版 */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <ListItem className="mx-2">
            <Link to="/books">排行榜</Link>
          </ListItem>
          <ListItem className="mx-2">
            <div className="dropdown dropdown-bottom px-0 py-0">
              <a tabIndex={0} className="flex items-center py-2 px-4">
                分類
                <span>
                  <img className="w-3 h-3 ml-2" src={ArrowDown} alt="category" />
                </span>
              </a>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 left-[-1rem]"
              >
                <ListItem>
                  <a>Item 1</a>
                </ListItem>
                <ListItem>
                  <a>Item 2</a>
                </ListItem>
              </ul>
            </div>
          </ListItem>
          <ListItem className="mx-2">
            <a>活動資訊</a>
          </ListItem>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">登入</a>
      </div>
    </div>
  );
}

NavigationBar.propTypes = {};

export default NavigationBar;
