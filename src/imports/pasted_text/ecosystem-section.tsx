      {/* Ecosystem Section */}
      <section className="w-full bg-gradient-to-br from-[#0a1e3d] via-[#1e3a8a] to-[#1e40af] py-16 sm:py-24 relative z-10 overflow-hidden">
        {/* Background dotted pattern */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="max-w-[1140px] mx-auto relative z-10 mx-[167px] my-[0px] p-[0px]">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              Hệ sinh thái truyền thông
            </h2>
            <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto">
              NETSPACE kiến tạo hệ sinh thái truyền thông số
              toàn diện.
            </p>
          </motion.div>
          <div 
            className="relative mb-12"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <style>{`
              @keyframes infinite-scroll-ecosystem {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-50% - 12px)); }
              }
              .animate-infinite-scroll-ecosystem {
                animation: infinite-scroll-ecosystem 25s linear infinite;
              }
            `}</style>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center pointer-events-none z-20 hidden md:flex pl-[25px] pr-[16px] py-[0px] mx-[-82px] my-[0px]">
              <motion.button
                onClick={handlePrevCard}
                className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 rotate-180" />
              </motion.button>
              <motion.button
                onClick={handleNextCard}
                className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="overflow-hidden cursor-grab active:cursor-grabbing">
              <style>{`
                .card-carousel-wrapper {
                  --card-width: 280px;
                }
                @media (min-width: 768px) {
                  .card-carousel-wrapper { --card-width: 320px; }
                }
                @media (min-width: 1024px) {
                  .card-carousel-wrapper { --card-width: 380px; }
                }
              `}</style>
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000) {
                    handleNextCard();
                  } else if (swipe > 10000) {
                    handlePrevCard();
                  }
                }}
                animate={{
                  x: `calc(-${currentCardIndex} * (var(--card-width) + 24px))`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="flex gap-6 px-3 card-carousel-wrapper"
              >
                {[...ecosystemCards, ...ecosystemCards].map((card, idx) => (
                  <div
                    key={`${card.id}-${idx}`}
                    className="w-[280px] md:w-[320px] lg:w-[380px] flex-shrink-0"
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden h-full border border-white/10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] hover:border-blue-400/50 cursor-pointer">
                      <div className="relative h-64">
                        <ImageWithFallback
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3">
                          {card.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-4">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Pagination and CTA Button */}
          <div className="flex flex-col items-center mt-4">
            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2.5 mb-10">
              {Array.from({
                length: Math.max(1, ecosystemCards.length - 2), // 6 cards but 4 dots
              }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentCardIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    (currentCardIndex % Math.max(1, ecosystemCards.length - 2)) === idx
                      ? "w-8 bg-white"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Chuyển đến thẻ ${idx + 1}`}
                />
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#3B82F6] font-bold text-[17px] py-4 px-10 rounded-full flex items-center justify-center gap-3 shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.25)] transition-all"
            >
              Tư vấn miễn phí ngay
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </motion.button>
          </div>
        </div>
      </section>