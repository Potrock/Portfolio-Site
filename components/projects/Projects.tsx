import Project from "./Project";
import Crypto_Cities_img from "../../assets/crypto-cities-img.png";
import Chunks_img from "../../assets/chunks-img.png";
import Minecreator_img from "../../assets/minecreator-img.png";

export default function Projects({}) {
	return (
		<ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-6 list-none">
			<Project
				name="Crypto Chunks"
				image={Chunks_img}
				destination="https://www.cryptochunks.net"
				description="Play to Earn Web3 Infrastructure for Linking Existing Video Game Profiles to a Crypto Wallet. Supports Steam and Minecraft accounts. Targets unofficial video game servers that want to support Web3"
				techStack="NextJS/React, Wagmi, Solidity, OAuth, Java"
			/>
			<Project
				name="Crypto Cities"
				image={Crypto_Cities_img}
				destination="https://cities.potrock.xyz"
				description="ERC721 NFT Based City Builder Game. Players control a CityNFT by constructing buildings, harvesting food, and training troops. Powered by modular smart contracts that can be upgraded in isolation."
				techStack="NextJS/React, Wagmi, Solidity, Hardhat"
			/>
			<div className="md:col-span-2">
				<Project
					name="MineCreator"
					image={Minecreator_img}
					destination="/projects/minecreator"
					description="Spigot based Minecraft Server with web shop integration, full branding, community of hundreds of players."
					techStack="Java, Fullstack Web, MySQL, SQLite, YAML"
				/>
			</div>
		</ul>
	);
}
