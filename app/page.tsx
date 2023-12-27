"use client";
import { Fragment } from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Navbar } from "@/components/navbar";
import styles from "./main.module.css"
import { useEffect, useState } from 'react';
import { press2play } from "@/config/fonts";

export default function Home() {
	const [blocks, setBlocks] = useState([]);

	useEffect(() => {
		const getBlocks = () => {
		  const BlockSize = window.innerWidth * 0.05;
		  const noOfBlocks = Math.ceil(window.innerHeight / BlockSize);
		  const blocksArray = [];
		
		  const colorize = (e)=>{
			e.target.style.background = "white";

			setTimeout(()=>{
				e.target.style.background = "transparent";

			},300)
		  }

		  for (let index = 0; index < noOfBlocks; index++) {
			blocksArray.push(<div onMouseEnter={(e)=>{
				colorize(e)
			}} key={`b_${index}`} className={styles.block}></div>);
		  }
	
		  setBlocks(blocksArray);
		};

		if (typeof window !== 'undefined') {
			getBlocks();
		  }
		}, []);
	

	return (
<>
		<Navbar />

			<div className="justify-center inline-block m-auto text-center">  
				<h1 className="text-6xl font-black " style={press2play.style}>Badgepacc</h1>
				<br />
				
				<h2 className={subtitle({ class: "mt-4" })}>
					Your badge , Your pacc
				</h2>
			</div>	


			<div className={styles.grid}>
				{
					 Array.from({ length: 20 }).map((_, index) => (
						<div key={index} className={styles.column}>
						   {blocks.length > 0 && (
        <div>
          {blocks.map((block, index) => (
            <div key={`block_${index}`}>{block}</div>
          ))}
        </div>
      )}
						</div>
					  ))
				}
				
			</div>
		</>
	);
}
