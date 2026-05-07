import React from "react";
import avatar from "../assets/anhdaidien.jpg";

export default function HeroSection() {
    return (
        <section className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* Left Content */}
            <div className="space-y-8">
                {/* Heading */}
                <div className="space-y-5">
                    <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
                        PHẠM CÔNG MINH
                    </h1>
                    
                    <p className="text-xl font-semibold text-accent-600">
                        Backend Intern tập trung vào API và hệ thống production
                    </p>

                    <p className="max-w-2xl text-base leading-8 text-ink/70 sm:text-lg">
                        Yêu thích xây dựng hệ thống backend với ASP.NET Core, thiết kế RESTful APIs,
                        tối ưu hiệu năng với PostgreSQL/SQL Server và triển khai ứng dụng bằng
                        Docker cùng các quy trình CI/CD hiện đại.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        Xem dự án
                    </a>

                    <a
                        href="#contact"
                        className="rounded-full border border-ink/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        Liên hệ
                    </a>
                </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
                <img
                    src={avatar}
                    alt="Pham Cong Minh"
                    className="h-56 w-56 rounded-full border-4 border-white object-cover shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
                />
            </div>
        </section>
    );
}