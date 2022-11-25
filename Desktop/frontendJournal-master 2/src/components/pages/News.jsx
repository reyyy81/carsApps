// What's new around campus

import React, {Component} from "react";
import navbar from "../navbar";
import './NewsCard.css'
import NewsCard from './NewsCard';

export const News = () => {
  return (
    <div classNameName="mainBody">
        <navbar/>
        <NewsCard />
    </div>
  )
}
