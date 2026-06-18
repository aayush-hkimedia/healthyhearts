import React, { useState } from 'react';
import { Calendar, User, Phone } from 'lucide-react';

const ConsultationForm: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', date: '' });

    return (
        <div className="bg-[#EAF3E6] rounded-3xl p-8 border border-[#D5E6CE]">
            <h3 className="text-[24px] font-bold text-[#0b1b36] mb-6">
                For Consultation
            </h3>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="bg-white rounded-2xl p-6 border border-[#D5E6CE]/40 space-y-4 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.02)]"
            >
                <h4 className="font-bold text-[#0b1b36] text-[16px] mb-2">
                    Book An Appointment
                </h4>
                <div className="relative">
                    <User
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-[#F7FAFD] border border-gray-100 rounded-xl py-3 pl-10 pr-4 text-[14px] text-[#0b1b36] placeholder-gray-400 focus:outline-none focus:border-[#0056b3] transition-colors"
                    />
                </div>
                <div className="relative">
                    <Phone
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-[#F7FAFD] border border-gray-100 rounded-xl py-3 pl-10 pr-4 text-[14px] text-[#0b1b36] placeholder-gray-400 focus:outline-none focus:border-[#0056b3] transition-colors"
                    />
                </div>
                <div className="relative">
                    <Calendar
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full bg-[#F7FAFD] border border-gray-100 rounded-xl py-3 pl-10 pr-4 text-[14px] text-[#0b1b36] text-gray-500 focus:outline-none focus:border-[#0056b3] transition-colors"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#0A2540] hover:bg-[#0056b3] text-white text-center py-3.5 rounded-xl font-bold text-[14px] transition-all duration-300 block shadow-md hover:-translate-y-0.5 mt-2"
                >
                    Confirm Booking
                </button>
            </form>
        </div>
    );
};

export default ConsultationForm;
