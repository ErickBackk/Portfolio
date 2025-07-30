import React, { useEffect, useState } from 'react';
import { Mail, Send, Youtube } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';

const API_URL = import.meta.env.VITE_SERVER_URL;

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		text: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

  useEffect(() => {
    console.log(formData)
  },[formData])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await axios.post(`${API_URL}/api/send`, formData);
			const data = await response.data.data;
			console.log(data);
			toast.success('Message sent successfully!');
			setFormData({
				name: '',
				email: '',
				subject: '',
				text: '',
			});
		} catch (error: any) {
			console.error('Error:', error);
			toast.error('Failed to send message. Please try again later.');
		}
	};

	return (
		<div className='container relative z-10 px-4 mx-auto'>
			<div className='max-w-4xl p-8 mx-auto border shadow-2xl backdrop-blur-xl bg-white/5 border-white/10 rounded-3xl'>
				<div className='mb-12 text-center'>
					<h1 className='mb-4 text-4xl font-bold md:text-5xl'>Get in Touch</h1>
					<p className='text-lg text-gray-400'>Have a project in mind? Let's create something amazing together!</p>
				</div>
				<div className='grid gap-12 md:grid-cols-2'>
					<div>
						<h2 className='mb-6 text-2xl font-semibold'>Contact Information</h2>
						<div className='space-y-6'>
							<div className='flex items-center gap-4'>
								<div className='flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full'>
									<Mail className='w-6 h-6' />
								</div>
								<div>
									<p className='text-sm text-gray-400'>Email</p>
									<p className='font-medium'>erickfx45@gmail.com</p>
								</div>
							</div>
							<div className='flex items-center gap-4'>
								<div className='flex items-center justify-center w-12 h-12 bg-red-600 rounded-full'>
									<Youtube className='w-6 h-6' />
								</div>
								<div>
									<p className='text-sm text-gray-400'>YouTube</p>
									<a
										href='https://www.youtube.com/@EuSouOBackk'
										target='_blank'
										rel='noopener noreferrer'
										className='font-medium transition-colors hover:text-blue-400'>
										@EuSouOBackk
									</a>
								</div>
							</div>
						</div>
					</div>

					<form
						onSubmit={handleSubmit}
						className='space-y-6'>
						<div>
							<label
								htmlFor='name'
								className='block mb-2 text-sm font-medium text-gray-300'>
								Name
							</label>
							<input
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								required
								className='w-full px-4 py-3 border rounded-lg bg-black/30 border-blue-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500'
								placeholder='Your name'
							/>
						</div>

						<div>
							<label
								htmlFor='email'
								className='block mb-2 text-sm font-medium text-gray-300'>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								required
								className='w-full px-4 py-3 border rounded-lg bg-black/30 border-blue-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500'
								placeholder='your@email.com'
							/>
						</div>

						<div>
							<label
								htmlFor='subject'
								className='block mb-2 text-sm font-medium text-gray-300'>
								Subject
							</label>
							<input
								type='text'
								id='subject'
								name='subject'
								value={formData.subject}
								onChange={handleChange}
								required
								className='w-full px-4 py-3 border rounded-lg bg-black/30 border-blue-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500'
								placeholder='Project subject'
							/>
						</div>

						<div>
							<label
								htmlFor='text'
								className='block mb-2 text-sm font-medium text-gray-300'>
								Message
							</label>
							<textarea
								id='text'
								name='text'
								value={formData.text}
								onChange={handleChange}
								required
								rows={4}
								className='w-full px-4 py-3 border rounded-lg bg-black/30 border-blue-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500'
								placeholder='Your message'></textarea>
						</div>

						<button
							type='submit'
							className='flex items-center justify-center w-full gap-2 px-6 py-3 font-medium transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed'>
							<Send size={20} />
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
