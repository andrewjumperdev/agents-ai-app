'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function FormularioPropuesta() {


  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    interes: '',
    tamano: '',
    presupuesto: '',
    comentarios: '',
    newsletter: false,
    vendedor: '',
  });

  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Error al enviar el formulario');
      setEnviado(true);
      setTimeout(() => setEnviado(false), 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-900 to-gray-900 flex flex-col items-center justify-center px-6 py-16 text-white">
      {/* Header */}
      <div className="flex flex-col items-center mb-10 text-center">
        <Image src="/logo.svg" alt="Jumper Enterprise" width={100} height={100} className="mb-6 opacity-90" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-yellow-400">
          Recibe tu propuesta personalizada 🚀
        </h1>
        <p className="text-indigo-200 max-w-2xl text-lg">
          Cuéntanos sobre tu empresa y tus objetivos. Te enviaremos una propuesta estratégica de automatización adaptada a tu negocio.
        </p>
      </div>

      {/* Formulario */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/10"
      >
        {enviado ? (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex flex-col items-center justify-center text-center py-24">
            <CheckCircle2 className="text-green-400 w-16 h-16 mb-4" />
            <p className="text-2xl font-semibold text-white mb-2">¡Solicitud enviada con éxito!</p>
            <p className="text-indigo-200 text-lg">En breve recibirás tu propuesta en tu correo electrónico.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-indigo-200">Nombre completo</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className="p-4 rounded-xl bg-white/15 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Ej: Ana Gómez" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-indigo-200">Nombre de la empresa</label>
                <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} required className="p-4 rounded-xl bg-white/15 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Ej: Growth Solutions S.A." />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-indigo-200">Correo electrónico</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="p-4 rounded-xl bg-white/15 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="correo@empresa.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-indigo-200">Teléfono o WhatsApp</label>
                <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required className="p-4 rounded-xl bg-white/15 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="+33 6 12 34 56 78" />
              </div>
            </div>

            {/* Dropdowns con opciones legibles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-indigo-200">¿Qué desea automatizar primero?</label>
                <select name="interes" value={formData.interes} onChange={handleChange} required className="p-4 rounded-xl bg-white/95 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option value="" disabled>Selecciona una opción</option>
                  <option>Ventas (Agente Ventas Pro)</option>
                  <option>Citas (Appointment Setter)</option>
                  <option>Reseñas (StarVault)</option>
                  <option>Contenido SEO (Content Magnet)</option>
                  <option>Secretario Virtual (Executive Assistant)</option>
                  <option>E-commerce (StorePilot)</option>
                  <option>Leads (LeadHunter)</option>
                  <option>Mensajería personalizada (Icebreaker Pro)</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-indigo-200">Tamaño del equipo</label>
                <select name="tamano" value={formData.tamano} onChange={handleChange} required className="p-4 rounded-xl bg-white/95 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option value="" disabled>Selecciona un rango</option>
                  <option>1 - 5 personas</option>
                  <option>6 - 20 personas</option>
                  <option>Más de 20 personas</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-indigo-200">Presupuesto mensual estimado</label>
              <select name="presupuesto" value={formData.presupuesto} onChange={handleChange} required className="p-4 rounded-xl bg-white/95 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option value="" disabled>Selecciona un rango</option>
                <option>Menos de $200</option>
                <option>$200 - $500</option>
                <option>$500 - $1,000</option>
                <option>Más de $1,000</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-indigo-200">Cuéntanos tus objetivos o retos actuales</label>
              <textarea name="comentarios" value={formData.comentarios} onChange={handleChange} rows={4} className="p-4 rounded-xl bg-white/15 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Ej: Quiero automatizar la atención al cliente y mejorar el seguimiento de leads."></textarea>
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange} className="w-5 h-5 accent-yellow-400" />
              <label className="text-indigo-200 text-sm">Deseo suscribirme al newsletter para recibir estrategias de automatización.</label>
            </div>

            {/* Editable vendedor */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-indigo-200">Código del vendedor</label>
              <input type="text" name="vendedor" value={formData.vendedor} onChange={handleChange} placeholder="Ingresa tu código" className="p-4 rounded-xl bg-white/15 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>

            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" disabled={loading} className="w-full bg-yellow-400 text-gray-900 font-bold py-4 rounded-xl text-lg shadow-lg hover:bg-yellow-300 transition mt-4">
              {loading ? "Enviando..." : "Recibir mi propuesta personalizada"}
            </motion.button>
          </form>
        )}
      </motion.div>
    </main>
  );
}
