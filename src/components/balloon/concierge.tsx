import { useState } from 'react';
import { ArrowUpRight, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contact, celebrations } from '@/lib/celebrations';

export function Concierge({ occasion, onOccasionChange }: { occasion: string; onOccasionChange: (value: string) => void }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const [notice, setNotice] = useState('');
  function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!contact.whatsapp) {
      setNotice('Our contact details are being updated. Your enquiry has not been sent.');
      return;
    }
    const message = `Hello Balloon Creation! I'm ${name}. I'd love to plan ${occasion || 'a celebration'}${date ? ` on ${date}` : ''}. ${details}`;
    window.open(`${contact.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }
  return <section className="concierge section-space" id="concierge"><div className="page-width concierge-layout">
    <div className="concierge-heading reveal"><span className="eyebrow">LET’S CREATE SOMETHING BEAUTIFUL</span><h2>Your next chapter.<br /><em>Our finest creation.</em></h2><p>Tell us what you’re dreaming of.<br />We’ll bring your celebration to life.</p><span className="concierge-location"><MapPin size={16} /> Indore, Madhya Pradesh</span></div>
    <form className="concierge-form reveal" onSubmit={send}>
      <h3>A celebration begins with a conversation.</h3>
      <div className="form-grid"><label>Your name<input value={name} onChange={e => setName(e.target.value)} autoComplete="name" placeholder="Your name" required /></label><label>The occasion<select value={occasion} onChange={e => onOccasionChange(e.target.value)} required><option value="">Select an occasion</option>{celebrations.map(item => <option key={item.name}>{item.name}</option>)}<option>Anniversary</option><option>Baby Shower</option><option>Other Celebration</option></select></label></div>
      <label>Celebration date <span className="optional">(optional)</span><input type="date" value={date} onChange={e => setDate(e.target.value)} /></label>
      <label>Your vision <span className="optional">(optional)</span><textarea value={details} onChange={e => setDetails(e.target.value)} placeholder="A colour palette, a special moment, a little inspiration…" rows={3} /></label>
      <Button variant="luxury" type="submit"><MessageCircle size={16} />Plan my celebration<ArrowUpRight size={16} /></Button>
      <p className="contact-notice" role="status">{notice || (!contact.phone ? 'Phone and WhatsApp details coming soon.' : '')}</p>
    </form>
  </div></section>;
}