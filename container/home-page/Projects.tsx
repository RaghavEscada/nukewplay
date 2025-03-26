import { projectItem } from "@/constants";
import { Heading, ProjectCard, RoundButton, Tags } from "@/components";
import { FeaturesSectionDemo } from "@/components/ui/bentogrid";


export default function Projects() {
	return (
		<section className="w-full rounded-t-[20px]">
			{/* Heading */}
			<Heading
				title="Featured projects"
				className="padding-x padding-y pb-[50px] border-b border-[#21212155]"
			/>

			{/* Projects List */}
			<div className="w-full flex justify-between gap-y-[50px] padding-x padding-y flex-wrap">
				{projectItem.map((item) => (
					<div className="w-[49%] sm:w-full xm:w-full" key={item.id}>
						{/* Project Title */}
						<div className="flex gap-[10px] items-center pb-[10px]">
							<span className="w-[10px] h-[10px] rounded-full bg-secondry" />
							<h1 className="small-text uppercase font-medium font-NeueMontreal text-secondry">
								{item.title}
							</h1>
						</div>

						{/* Project Card */}
						<ProjectCard item={item} key={item.id} />

						{/* Project Links */}
						<div className="flex items-center gap-[10px] mt-[20px] flex-wrap">
							{item.links.map((link) => (
								<Tags
									className="hover:text-white"
									bgcolor="#212121"
									item={link}
									key={link.id}
								/>
							))}
						</div>
					</div>
				))}
			</div>

			{/* Button Section */}
			<div className="w-full flex justify-center mt-10">
				<div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
					<RoundButton
						href="/nuke-works"
						title="view all projects"
						bgcolor="#000"
						className="bg-white text-black"
						style={{ color: "#fff" }}
					/>
				</div>
			</div>

			{/* Separate FeaturesSectionDemo */}
			<div className="w-full mt-16">
				<FeaturesSectionDemo />
			</div>

		
			
		</section>
	);
}
