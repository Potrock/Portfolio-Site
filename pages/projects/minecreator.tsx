import YoutubeIFrame from "../../components/youtube/YoutubeIFrame";

export default function Page({}) {
	return (
		<>
			<div>
				<h1 className="text-6xl font-medium text-white pb-6">
					MineCreator
				</h1>
				<div className="text-md text-white">
					<p>
						A java-based custom minecraft server with full branding,
						a web shop, and a discord bot.
					</p>
					<p>
						I built this server from scratch in the summer of 2021
						outside of my internship.
					</p>
					<p>Tech used: Java, SQLite, Javascript, Python</p>
					<p>
						The server is now offline, but it developed a community
						of hundreds of players and generated profit from the web
						shop. View the trailer below.
					</p>
                    <p>
                        The web shop is online at <a href="https://shop.minecreator.com" className="text-blue-500">shop.minecreator.com</a>
                    </p>
				</div>
				<div className="justify-center pt-6">
                    <YoutubeIFrame videoId="g97HaCf88Hg" title="MineCreator Server Trailer" />
				</div>
			</div>
		</>
	);
}
