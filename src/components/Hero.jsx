function Hero() {
	return (
		<>
			<div>
				<header className='h-[764px] w-full flex flex-col justify-center items-start bg-gradient-to-br from-gradient/90 to-white'>
					<div className='w-[1258px] h-[90px] bg-white m-auto mt-[28px] flex flex-row justify-between items-center rounded-[10px]'>
						<span className='ml-[26px]'>
							<svg
								width='205'
								height='49'
								viewBox='0 0 205 49'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M17.4166 0C23.9335 0 30.1835 2.58124 34.7917 7.17588C39.3998 11.7705 41.9886 18.0022 41.9886 24.5C41.9886 30.9978 39.3998 37.2295 34.7917 41.8241C30.1835 46.4188 23.9335 49 17.4166 49V0Z'
									fill='url(#paint0_linear_1_1367)'
								/>
								<path
									d='M17.4166 41.8611C27.0356 41.8611 34.8333 34.0863 34.8333 24.4955C34.8333 14.9047 27.0356 7.12988 17.4166 7.12988C7.7977 7.12988 0 14.9047 0 24.4955C0 34.0863 7.7977 41.8611 17.4166 41.8611Z'
									fill='url(#paint1_linear_1_1367)'
								/>
								<path
									d='M64.6466 36.7657H59.6717C58.69 36.8276 57.7057 36.6948 56.7759 36.3749C55.846 36.055 54.989 35.5545 54.2544 34.9022C53.5817 34.1803 53.0647 33.3285 52.7355 32.3994C52.4063 31.4703 52.2717 30.4838 52.3403 29.5008V15.4841C52.2717 14.5011 52.4063 13.5145 52.7355 12.5854C53.0647 11.6563 53.5817 10.8045 54.2544 10.0826C54.989 9.43035 55.846 8.92981 56.7759 8.60994C57.7057 8.29007 58.69 8.15724 59.6717 8.21913H64.6466C65.6282 8.15774 66.6124 8.29081 67.5422 8.61065C68.472 8.93049 69.329 9.43077 70.0639 10.0826C70.7366 10.8045 71.2535 11.6563 71.5828 12.5854C71.912 13.5145 72.0465 14.5011 71.978 15.4841V29.5368C72.0465 30.5198 71.912 31.5063 71.5828 32.4354C71.2535 33.3645 70.7366 34.2163 70.0639 34.9382C69.3265 35.5841 68.4681 36.0781 67.5384 36.3917C66.6086 36.7053 65.6258 36.8325 64.6466 36.7657ZM60.5565 31.8864H63.7166C64.4439 31.9563 65.1697 31.7398 65.7391 31.2832C66.197 30.7156 66.4141 29.9918 66.344 29.2667V15.7631C66.4141 15.038 66.197 14.3143 65.7391 13.7466C65.1697 13.2901 64.4439 13.0736 63.7166 13.1434H60.5565C60.199 13.1063 59.8376 13.1406 59.4935 13.2441C59.1494 13.3477 58.8294 13.5185 58.5521 13.7466C58.1106 14.3217 57.9041 15.0423 57.9743 15.7631V29.2667C57.9041 29.9876 58.1106 30.7081 58.5521 31.2832C58.8294 31.5114 59.1494 31.6822 59.4935 31.7857C59.8376 31.8893 60.199 31.9235 60.5565 31.8864Z'
									fill='#F88D31'
								/>
								<path
									d='M85.5935 24.8825H77.1425C77.0208 24.8952 76.8977 24.8807 76.7824 24.8399C76.667 24.7992 76.5623 24.7333 76.4758 24.647C76.3892 24.5607 76.3231 24.4563 76.2823 24.3413C76.2414 24.2262 76.2268 24.1036 76.2396 23.9822V21.3355C76.2396 20.6874 76.5406 20.3633 77.1425 20.3633H85.5935C86.1954 20.3633 86.4964 20.6874 86.4964 21.3355V23.9462C86.5151 24.0703 86.505 24.1971 86.4668 24.3167C86.4286 24.4363 86.3634 24.5456 86.2762 24.636C86.1889 24.7265 86.082 24.7958 85.9636 24.8385C85.8452 24.8813 85.7186 24.8963 85.5935 24.8825Z'
									fill='#3953A4'
								/>
								<path
									d='M91.1914 35.8386V9.18254C91.1787 9.06119 91.1932 8.93853 91.2341 8.82352C91.2749 8.70851 91.3411 8.60405 91.4276 8.51777C91.5141 8.43149 91.6189 8.36558 91.7342 8.32484C91.8496 8.2841 91.9726 8.26956 92.0943 8.2823H103.082C104.066 8.22082 105.051 8.35557 105.981 8.67864C106.911 9.00172 107.768 9.50663 108.5 10.1638C109.172 10.8754 109.691 11.7173 110.023 12.6372C110.356 13.5572 110.495 14.5354 110.432 15.5112V29.5369C110.495 30.5127 110.356 31.491 110.023 32.4109C109.691 33.3308 109.172 34.1728 108.5 34.8844C107.768 35.5415 106.911 36.0464 105.981 36.3695C105.051 36.6926 104.066 36.8273 103.082 36.7659H92.0943C91.9701 36.7794 91.8444 36.7644 91.7268 36.7222C91.6092 36.68 91.5028 36.6115 91.4157 36.5221C91.3287 36.4327 91.2632 36.3247 91.2243 36.2062C91.1855 36.0878 91.1742 35.962 91.1914 35.8386ZM97.331 31.8956H102.18C102.907 31.9654 103.633 31.7489 104.202 31.2924C104.66 30.7247 104.877 30.001 104.807 29.2759V15.7723C104.877 15.0471 104.66 14.3234 104.202 13.7558C103.633 13.2992 102.907 13.0827 102.18 13.1526H97.331C97.2649 13.1437 97.1976 13.1501 97.1344 13.1714C97.0712 13.1927 97.0137 13.2282 96.9665 13.2753C96.9193 13.3223 96.8837 13.3796 96.8623 13.4426C96.841 13.5057 96.8345 13.5728 96.8435 13.6387V31.4004C96.8342 31.4672 96.8407 31.5353 96.8626 31.5991C96.8844 31.6629 96.9209 31.7208 96.9692 31.768C97.0174 31.8153 97.0761 31.8506 97.1405 31.8712C97.2049 31.8918 97.2733 31.897 97.3401 31.8866L97.331 31.8956Z'
									fill='#4643D3'
								/>
								<path
									d='M115.569 10.3347V6.48173C115.549 6.35894 115.558 6.23309 115.597 6.11462C115.635 5.99614 115.701 5.88844 115.789 5.80044C115.877 5.71244 115.985 5.64668 116.104 5.60861C116.223 5.57053 116.349 5.56123 116.472 5.58149H120.346C120.947 5.58149 121.248 5.86356 121.248 6.42771V10.3257C121.269 10.4485 121.259 10.5744 121.221 10.6929C121.183 10.8113 121.117 10.919 121.029 11.007C120.941 11.095 120.833 11.1608 120.714 11.1989C120.595 11.2369 120.469 11.2462 120.346 11.226H116.472C116.35 11.2459 116.225 11.2366 116.107 11.199C115.989 11.1614 115.881 11.0965 115.793 11.0096C115.705 10.9227 115.639 10.8162 115.6 10.6989C115.561 10.5817 115.551 10.4569 115.569 10.3347ZM115.569 35.8295V15.079C115.569 14.4788 115.87 14.1788 116.472 14.1788H120.3C120.422 14.166 120.545 14.1806 120.661 14.2213C120.776 14.262 120.881 14.328 120.967 14.4142C121.054 14.5005 121.12 14.605 121.161 14.72C121.202 14.835 121.216 14.9577 121.203 15.079V35.8385C121.24 36.1068 121.168 36.3786 121.005 36.5947C120.804 36.7332 120.561 36.797 120.318 36.7748H116.472C116.347 36.7886 116.22 36.7735 116.102 36.7308C115.984 36.6881 115.877 36.6188 115.79 36.5283C115.702 36.4379 115.637 36.3286 115.599 36.209C115.561 36.0894 115.551 35.9626 115.569 35.8385V35.8295Z'
									fill='#4643D3'
								/>
								<path
									d='M134.34 35.7486H132.878C131.931 35.8169 130.981 35.6863 130.088 35.3653C129.195 35.0443 128.38 34.54 127.695 33.8851C126.425 32.382 125.793 30.4441 125.934 28.4837V21.3808C125.866 20.3978 126 19.4112 126.33 18.4821C126.659 17.5531 127.176 16.7012 127.848 15.9794C128.583 15.3271 129.44 14.8265 130.37 14.5067C131.3 14.1868 132.284 14.054 133.266 14.1159H143.559C144.209 14.1159 144.534 14.4159 144.534 15.0161V36.9099C144.597 37.8817 144.458 38.856 144.126 39.7716C143.793 40.6873 143.274 41.5244 142.602 42.2303C141.866 42.8817 141.009 43.3818 140.08 43.7016C139.15 44.0214 138.166 44.1547 137.184 44.0938H128.643C128.383 44.122 128.122 44.0513 127.912 43.8958C127.759 43.7018 127.688 43.4567 127.713 43.2116V40.1508C127.7 40.0294 127.715 39.9068 127.756 39.7917C127.797 39.6767 127.863 39.5723 127.949 39.486C128.036 39.3997 128.141 39.3338 128.256 39.2931C128.371 39.2523 128.494 39.2378 128.616 39.2505H136.218C136.945 39.3204 137.671 39.1039 138.241 38.6474C138.696 38.0958 138.913 37.3869 138.846 36.6758V33.3089H138.665C138.332 34.1034 137.714 34.7455 136.932 35.1094C136.13 35.5209 135.242 35.7398 134.34 35.7486ZM138.855 27.5024V19.5173C138.855 19.1932 138.677 19.0312 138.322 19.0312H134.142C133.784 18.9941 133.423 19.0283 133.079 19.1318C132.734 19.2354 132.414 19.4062 132.137 19.6343C131.696 20.2094 131.489 20.93 131.559 21.6509V28.2586C131.485 28.9743 131.692 29.691 132.137 30.2571C132.705 30.7012 133.424 30.9078 134.142 30.8333H135.785C137.843 30.8273 138.873 29.717 138.873 27.5024H138.855Z'
									fill='#4643D3'
								/>
								<path
									d='M149.635 10.3347V6.48173C149.615 6.35894 149.624 6.23309 149.662 6.11462C149.7 5.99614 149.766 5.88844 149.855 5.80044C149.943 5.71244 150.051 5.64668 150.17 5.60861C150.289 5.57053 150.415 5.56123 150.538 5.58149H154.393C154.995 5.58149 155.296 5.86356 155.296 6.42771V10.3257C155.317 10.4485 155.307 10.5744 155.269 10.6929C155.231 10.8113 155.165 10.919 155.077 11.007C154.988 11.095 154.88 11.1608 154.762 11.1989C154.643 11.2369 154.516 11.2462 154.393 11.226H150.52C150.399 11.2427 150.276 11.2311 150.16 11.1921C150.045 11.1531 149.94 11.0877 149.854 11.0012C149.768 10.9147 149.703 10.8094 149.665 10.6937C149.628 10.5781 149.617 10.4551 149.635 10.3347ZM149.635 35.8295V15.079C149.635 14.4788 149.936 14.1788 150.538 14.1788H154.393C154.515 14.166 154.638 14.1806 154.753 14.2213C154.869 14.262 154.974 14.328 155.06 14.4142C155.147 14.5005 155.213 14.605 155.254 14.72C155.294 14.835 155.309 14.9577 155.296 15.079V35.8385C155.333 36.1068 155.261 36.3786 155.098 36.5947C154.897 36.7332 154.654 36.7969 154.411 36.7748H150.583C150.455 36.7964 150.323 36.7872 150.198 36.7479C150.074 36.7086 149.961 36.6405 149.868 36.549C149.776 36.4575 149.706 36.3454 149.666 36.2218C149.625 36.0983 149.615 35.9669 149.635 35.8385V35.8295Z'
									fill='#4643D3'
								/>
								<path
									d='M160.885 19.0311H159.079C158.822 19.0564 158.564 18.9928 158.348 18.8511C158.269 18.7519 158.21 18.6378 158.176 18.5156C158.142 18.3934 158.133 18.2656 158.149 18.1399V15.0791C158.137 14.9577 158.151 14.835 158.192 14.72C158.233 14.605 158.299 14.5006 158.385 14.4143C158.472 14.328 158.577 14.2621 158.692 14.2214C158.807 14.1806 158.93 14.1661 159.052 14.1788H160.858C160.924 14.1877 160.991 14.1813 161.055 14.16C161.118 14.1388 161.175 14.1032 161.222 14.0562C161.27 14.0091 161.305 13.9518 161.327 13.8888C161.348 13.8257 161.354 13.7586 161.346 13.6927V9.45256C161.346 8.8524 161.671 8.55233 162.321 8.55233H166.131C166.253 8.53959 166.376 8.55412 166.491 8.59486C166.606 8.6356 166.711 8.70152 166.798 8.78779C166.884 8.87407 166.95 8.97853 166.991 9.09354C167.032 9.20856 167.046 9.33122 167.034 9.45256V13.6657C167.034 13.9898 167.211 14.1518 167.566 14.1518H171.033C171.155 14.1391 171.278 14.1536 171.394 14.1943C171.509 14.2351 171.614 14.301 171.7 14.3873C171.787 14.4736 171.853 14.578 171.894 14.693C171.935 14.808 171.949 14.9307 171.936 15.052V18.1129C171.961 18.3579 171.89 18.6031 171.738 18.797C171.528 18.9526 171.266 19.0233 171.006 18.9951H167.539C167.184 18.9951 167.007 19.1571 167.007 19.4812V29.3118C166.972 29.6653 167.01 30.022 167.117 30.3607C167.224 30.6994 167.398 31.0132 167.63 31.2834C168.21 31.739 168.944 31.9549 169.679 31.8865H171.485C171.607 31.8738 171.73 31.8883 171.845 31.9291C171.96 31.9698 172.065 32.0357 172.152 32.122C172.238 32.2083 172.304 32.3127 172.345 32.4277C172.386 32.5427 172.401 32.6654 172.388 32.7868V35.8476C172.413 36.0926 172.341 36.3378 172.189 36.5317C171.98 36.6881 171.718 36.7589 171.458 36.7298H168.749C166.768 36.8458 164.82 36.1759 163.332 34.8663C162.659 34.1607 162.139 33.3236 161.807 32.4079C161.474 31.4922 161.336 30.5177 161.4 29.5459V19.5172C161.41 19.4487 161.403 19.3787 161.38 19.3132C161.358 19.2477 161.319 19.1886 161.269 19.141C161.218 19.0933 161.157 19.0584 161.09 19.0393C161.024 19.0202 160.953 19.0174 160.885 19.0311Z'
									fill='#4643D3'
								/>
								<path
									d='M184.053 36.7659H182.988C182.006 36.8278 181.022 36.6949 180.092 36.3751C179.162 36.0552 178.305 35.5546 177.57 34.9024C176.898 34.1805 176.381 33.3287 176.052 32.3996C175.722 31.4705 175.588 30.4839 175.656 29.5009V21.3808C175.588 20.3978 175.722 19.4112 176.052 18.4821C176.381 17.5531 176.898 16.7012 177.57 15.9794C178.305 15.3271 179.162 14.8265 180.092 14.5067C181.022 14.1868 182.006 14.054 182.988 14.1159H193.217C193.867 14.1159 194.193 14.4159 194.193 15.0161V35.8386C194.193 36.4388 193.867 36.7389 193.217 36.7389H189.479C189.358 36.7516 189.235 36.7371 189.119 36.6963C189.004 36.6556 188.899 36.5897 188.813 36.5034C188.726 36.4171 188.66 36.3127 188.619 36.1976C188.578 36.0826 188.564 35.96 188.577 35.8386V34.3712H188.396C188.071 35.1707 187.45 35.8151 186.662 36.1717C185.849 36.5642 184.957 36.7673 184.053 36.7659ZM188.568 28.5197V19.5173C188.568 19.1932 188.387 19.0312 188.035 19.0312H183.855C183.497 18.9941 183.136 19.0283 182.791 19.1318C182.447 19.2354 182.127 19.4062 181.85 19.6343C181.429 20.2014 181.233 20.9035 181.299 21.6058V29.2309C181.229 29.9517 181.436 30.6723 181.877 31.2474C182.154 31.4755 182.474 31.6463 182.819 31.7499C183.163 31.8534 183.524 31.8877 183.882 31.8506H185.525C187.571 31.8746 188.595 30.7643 188.595 28.5197H188.568Z'
									fill='#4643D3'
								/>
								<path
									d='M204.052 36.7658H200.269C200.147 36.7785 200.024 36.764 199.909 36.7233C199.793 36.6825 199.689 36.6166 199.602 36.5303C199.516 36.4441 199.449 36.3396 199.409 36.2246C199.368 36.1096 199.353 35.9869 199.366 35.8656V6.52678C199.353 6.40543 199.368 6.28277 199.409 6.16776C199.449 6.05275 199.516 5.94829 199.602 5.86201C199.689 5.77574 199.793 5.70982 199.909 5.66908C200.024 5.62834 200.147 5.61381 200.269 5.62654H204.052C204.174 5.61381 204.297 5.62834 204.412 5.66908C204.527 5.70982 204.632 5.77574 204.719 5.86201C204.805 5.94829 204.871 6.05275 204.912 6.16776C204.953 6.28277 204.968 6.40543 204.955 6.52678V35.8386C204.972 35.962 204.961 36.0877 204.922 36.2062C204.883 36.3246 204.818 36.4327 204.731 36.5221C204.643 36.6115 204.537 36.6799 204.419 36.7222C204.302 36.7644 204.176 36.7793 204.052 36.7658Z'
									fill='#4643D3'
								/>
								<defs>
									<linearGradient
										id='paint0_linear_1_1367'
										x1='12.2503'
										y1='20.0677'
										x2='40.4279'
										y2='38.0364'
										gradientUnits='userSpaceOnUse'>
										<stop stop-color='#4643D3' stop-opacity='0.75' />
										<stop offset='1' stop-color='#0500FF' />
									</linearGradient>
									<linearGradient
										id='paint1_linear_1_1367'
										x1='-7.32384'
										y1='21.3539'
										x2='14.0681'
										y2='48.6369'
										gradientUnits='userSpaceOnUse'>
										<stop stop-color='#FAD961' />
										<stop offset='1' stop-color='#F76B1C' />
									</linearGradient>
								</defs>
							</svg>
						</span>
						<div className='flex w-[496px] h-[65px] items-center'>
							<ul className='flex flex-grow justify-around text-[20px] capitalize font-semibold'>
								<li>home</li>
								<li>about</li>
								<li>service</li>

								<div className='absolute flex justify-center  w-[10px] h-[35px] m-[45px] text-[18px] rounded-[10px] text-end'>
									<div className=' absolute  -z-10-10 w-0 h-0 border-solid border-b-[#F7AD3E] indent-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent'></div>
									<div className='absolute flex justify-center text-white w-[78px] h-[35px] bg-gradient-to-br from-gradient-2 font-semibold to-gradient-3 m-[17px] text-[18px] rounded-[10px] items-center'>
										<p className=''>New</p>
									</div>
								</div>
								<li>team</li>
								<li>contact</li>
							</ul>
						</div>

						<button className='w-[177px] h-[56px] rounded-[10px] bg-gradient-to-br from-gradient-2 font-semibold to-gradient-3 m-[17px] text-[18px]'>
							{" "}
							Get a Quote
						</button>
					</div>
					<section className=' flex h-[500px] w-full justify-center items-center'>
						<div className=''>
							<p className='font-bold text-[60px] w-[17ch]'>
								Best Solution For Your{" "}
								<b className='font-bold text-primary-0'>Bussines</b> Startup
							</p>
							{/* <img className="absolute bottom-[129px]" src="/public/assets/hero/Text BG.png" alt="" /> */}
						</div>
						<div>
							<img
								className=''
								src='/public/assets/hero/banner.png'
								alt=''
								width={737}
								height={498}
							/>
						</div>
					</section>
				</header>
			</div>
		</>
	);
}
export default Hero;
