import { useState } from 'react';
import { Youtube, Camera } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard';
import Footer from './components/Footer';
import { videos } from './data/videos';
import Contact from './components/Contact';
import { siDiscord } from 'simple-icons';

function App() {
	const [activeCategory, setActiveCategory] = useState('all');
	const { t } = useLanguage();

	const filteredVideos = activeCategory === 'all' ? videos : videos.filter((video) => video.category === activeCategory);

	return (
		<div className='relative min-h-screen overflow-hidden text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
			{/* Animated background elements */}
			<div className='fixed inset-0 z-0'>
				{/* Gradient orbs */}
				<div className='absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 blur-3xl animate-pulse'></div>
				<div className='absolute delay-1000 rounded-full top-1/2 right-1/3 w-80 h-80 bg-purple-500/15 blur-3xl animate-pulse'></div>
				<div className='absolute rounded-full bottom-1/4 left-1/2 w-72 h-72 bg-purple-500/20 blur-3xl animate-pulse delay-2000'></div>

				{/* Grid pattern overlay */}
				<div className='absolute inset-0 opacity-5'>
					<div
						className='w-full h-full'
						style={{
							backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
							backgroundSize: '50px 50px',
						}}></div>
				</div>
			</div>

			<Navbar />

			{/* Hero Section */}
			<section className='relative z-10 flex items-center justify-center min-h-screen pt-20'>
				<div className='grid items-center gap-16 px-6 mx-auto max-w-7xl lg:grid-cols-2'>
					{/* Centered Content */}
					<div className='max-w-4xl mx-auto space-y-8 text-center lg:col-span-2'>
						{/* Profile card */}
						<div className='p-8 border shadow-2xl backdrop-blur-xl bg-white/5 border-white/10 rounded-3xl'>
							<div className='flex items-center justify-center gap-6 mb-8'>
								<div className='relative'>
									<img
										src='https://yt3.googleusercontent.com/xIwL1F5HTg0c7zhkajS9YeeM03P9qU5y8UOHir2uQWkxngr5ffbEVCgMfcdNl4XC3dZnphg4=s160-c-k-c0x00ffffff-no-rj'
										alt='EuSouOBackk'
										className='w-24 h-24 border-2 rounded-full shadow-lg border-purple-400/50'
									/>
									<div className='absolute w-6 h-6 bg-green-400 border-2 rounded-full -bottom-1 -right-1 border-slate-900 animate-pulse'></div>
								</div>
								<div>
									<h1 className='mb-3 text-5xl font-bold text-transparent lg:text-6xl bg-gradient-to-r from-white via-purple-200 to-purple-200 bg-clip-text'>
										Backk
									</h1>
									<div className='flex items-center gap-2 text-green-400'>
										<div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
										<span className='text-sm font-medium'>Online</span>
									</div>
								</div>
							</div>

							<div className='mb-8 space-y-4'>
								<p className='text-xl font-medium text-white/90'>{t('hero.creator')}</p>
								<p className='text-lg text-white/70'>{t('hero.editor')}</p>
							</div>

							{/* Action buttons */}
							<div className='flex flex-wrap justify-center gap-4'>
								<a
									href='https://discord.com/users/330526170250739712'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-3 px-6 py-3 font-medium transition-colors duration-200 shadow-lg bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 rounded-xl'>
									<svg
										role='img'
										viewBox='0 0 24 24'
										width={20}
										height={20}
										fill={`#fff`}
										xmlns='http://www.w3.org/2000/svg'>
										<title>Discord</title>
										<path d={siDiscord.path} />
									</svg>
									Discord
								</a>
								<a
									href='https://www.youtube.com/@EuSouOBackk'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-3 px-6 py-3 font-medium transition-colors duration-200 shadow-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-xl'>
									<Youtube size={20} />
									{t('hero.youtube')}
								</a>
								<a
									href='#videos'
									className='flex items-center gap-3 px-6 py-3 font-medium transition-colors duration-200 border shadow-lg bg-white/10 border-white/20 hover:bg-white/20 rounded-xl'>
									<Camera size={20} />
									{t('hero.videos')}
								</a>
							</div>
						</div>
					</div>

					{/* Right side - Large image */}
				</div>
			</section>

			{/* About Section */}
			<section className='relative z-10 px-6 py-24'>
				<div className='absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent'></div>

				<div className='relative z-10 max-w-4xl mx-auto text-center'>
					<div className='p-12 border shadow-2xl backdrop-blur-xl bg-white/5 border-white/10 rounded-3xl'>
						<h2 className='mb-8 text-4xl font-bold text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-200 bg-clip-text'>
							{t('about.title')}
						</h2>
						<p className='max-w-2xl mx-auto text-lg leading-relaxed text-white/80'>{t('about.description')}</p>
					</div>
				</div>
			</section>

			{/* Videos Section */}
			<section
				id='videos'
				className='relative z-10 px-6 py-24'>
				<div className='relative z-10 mx-auto max-w-7xl'>
					<h2 className='mb-16 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-200 bg-clip-text'>
						{t('videos.title')}
					</h2>

					{/* Category filter */}
					<div className='flex justify-center mb-16'>
						<div className='inline-flex p-2 border shadow-xl bg-white/5 border-white/10 rounded-2xl'>
							{[
								{ key: 'all', label: t('videos.all') },
								{ key: 'mmv', label: 'MMV' },
								{ key: 'amv', label: 'AMV' },
								{ key: 'gameplay', label: 'GAMEPLAY' },
								{ key: 'motion', label: 'MOTION' },
							].map(({ key, label }) => (
								<button
									key={key}
									onClick={() => setActiveCategory(key)}
									className={`px-6 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
										activeCategory === key
											? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
											: 'text-white/70 hover:text-white hover:bg-white/10'
									}`}>
									{label}
								</button>
							))}
						</div>
					</div>

					{/* Video grid */}
					<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
						{filteredVideos.map((video, index) => (
							<VideoCard
								key={index}
								video={video}
							/>
						))}
					</div>
				</div>
			</section>

			{/* contact section */}
			<section>
				<div className='pt-8 pb-4'>
					<div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-slate-900/50'></div>
					<Contact />
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default App;
