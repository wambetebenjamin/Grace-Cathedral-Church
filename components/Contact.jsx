'use client';

import { useState } from 'react';
import { site } from '@/lib/site';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import {
  CheckIcon,
  ClockIcon,
  LoaderIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
  WhatsAppIcon,
} from './Icons';

const initialForm = { name: '', email: '', phone: '', message: '', website: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState('');

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrors({});
    setServerMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus('success');
        setServerMessage(data.message);
        setForm(initialForm);
      } else if (data?.errors) {
        setErrors(data.errors);
        setStatus('error');
        setServerMessage('Please fix the highlighted fields.');
      } else {
        setStatus('error');
        setServerMessage(data?.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setServerMessage('Network error. please check your connection and try again.');
    }
  };

  const contactItems = [
    {
      Icon: MapPinIcon,
      label: 'Find Us',
      value: site.addressFull,
      href: site.mapDirections,
    },
    {
      Icon: PhoneIcon,
      label: 'Call Us',
      value: site.phoneDisplay,
      href: site.phoneHref,
    },
    {
      Icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: site.phoneDisplay,
      href: site.whatsapp,
    },
    {
      Icon: MailIcon,
      label: 'Email',
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      Icon: ClockIcon,
      label: 'Office Hours',
      value: site.officeHours,
    },
  ];

  return (
    <section id="contact" className="bg-[#faf8f4] py-24 lg:py-28">
      <div className="container-site">
        <SectionHeader
          eyebrow="We’d Love to Hear From You"
          title="Visit or Contact Us"
          subtitle="Questions, prayer requests, or planning your first visit. send us a message and our team will get back to you."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* ── Form ─────────────────────────────────────────── */}
          <FadeIn>
            <form onSubmit={onSubmit} noValidate className="card p-7 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-[13px] font-bold text-blue-900"
                  >
                    Name <span className="text-sky-600">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your full name"
                    className={`input ${errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400/15' : ''}`}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-[13px] font-bold text-blue-900"
                  >
                    Email <span className="text-sky-600">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@example.com"
                    className={`input ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400/15' : ''}`}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-phone"
                    className="mb-1.5 block text-[13px] font-bold text-blue-900"
                  >
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+254 7XX XXX XXX"
                    className={`input ${errors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-400/15' : ''}`}
                    autoComplete="tel"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-[13px] font-bold text-blue-900"
                  >
                    Message <span className="text-sky-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="How can we serve you? (Prayer request, visit planning, partnership…)"
                    className={`input resize-none ${errors.message ? 'border-red-400 focus:border-red-400 focus:ring-red-400/15' : ''}`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.message}</p>
                  )}
                </div>
              </div>

              {/* Honeypot. hidden from humans */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={update('website')}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="pointer-events-none absolute left-[-9999px] h-0 w-0 opacity-0"
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-blue mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <LoaderIcon className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <SendIcon className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-bold text-green-700 ring-1 ring-green-200">
                  <CheckIcon className="h-4 w-4" /> {serverMessage}
                </p>
              )}
              {status === 'error' && serverMessage && (
                <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-center text-sm font-bold text-red-600 ring-1 ring-red-200">
                  {serverMessage}
                </p>
              )}
            </form>
          </FadeIn>

          {/* ── Details + map ────────────────────────────────── */}
          <FadeIn delay={140} className="flex flex-col gap-8">
            <div className="card p-7 sm:p-9">
              <h3 className="font-sans text-xl font-black text-blue-900">
                Grace Cathedral Church
              </h3>
              <ul className="mt-5 space-y-4">
                {contactItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                      <item.Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-semibold text-blue-800 transition hover:text-sky-700"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-blue-800">{item.value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Google Maps embed. Nairobi */}
            <div className="card overflow-hidden">
              <iframe
                src={site.mapEmbed}
                title="Map. Grace Cathedral Church, Nairobi"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-80 w-full border-0"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
