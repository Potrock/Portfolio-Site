import Project from "./Project";
import Crypto_Cities_img from "../../assets/crypto-cities-img.png";
import clans_img from "../../assets/0xclans-logo.png";
import Minecreator_img from "../../assets/minecreator-img.png";

export default function Projects({}) {
	return (
		<ul className="grid gap-8 mb-6 list-none sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<Project
				name="0xClans"
				image={clans_img}
				destination="https://www.0xclans.xyz"
				description="Social Gaming Infrastructure for Linking Existing Video Game Profiles to a Crypto Wallet. Supports Steam and Minecraft accounts. Customizable Clan Smart Contract System with automatic deployment."
				techStack="NextJS/React, Wagmi, Solidity, PostgresQL"
				date="2023"
			/>
			<Project
				name="Crypto Cities"
				image={Crypto_Cities_img}
				destination="https://cities.potrock.xyz"
				description="ERC721 NFT Based City Builder Game. Players control a CityNFT by constructing buildings, harvesting food, and training troops. Powered by modular smart contracts that can be upgraded in isolation."
				techStack="NextJS/React, Wagmi, Solidity, Hardhat"
				date="2022"
			/>
			<div className="md:col-span-2">
				<Project
					name="MineCreator"
					image={Minecreator_img}
					destination="/projects/minecreator"
					description="Spigot based Minecraft Server with web shop integration, full branding, community of hundreds of players."
					techStack="Java, Fullstack Web, MySQL, SQLite, YAML"
					date="2020-2021"
				/>
			</div>
		</ul>
	);
}
