import React, { useState } from 'react';
import { X, Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser'; // <-- Import d'EmailJS

interface RecommendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecommendModal: React.FC<RecommendModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [algorithmName, setAlgorithmName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Pour afficher un effet de chargement

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // --- CONFIGURATION EMAILJS ---
    const SERVICE_ID = "service_fkbvu6t"; 
    const TEMPLATE_ID = "template_3d4fvth";
    const PUBLIC_KEY = "JRsxhl3HOIAMT9DH6";

    const templateParams = {
      title: "Nouvelle suggestion d'algorithme",
      name: name,              
      email: email,          
      message: `Algorithme suggéré : ${algorithmName} \n\n Message : ${message || "Aucun message"}`, 
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setLoading(false);
        setSubmitted(true);
        
        // Fermer la modale après 3 secondes
        setTimeout(() => {
          setSubmitted(false);
          setName('');
          setEmail('');
          setAlgorithmName('');
          setMessage('');
          onClose();
        }, 3000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setLoading(false);
        alert("Une erreur est survenue lors de l'envoi. Vérifie tes clés EmailJS.");
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl relative">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 bg-slate-800/50 hover:bg-slate-800 p-2 rounded-xl transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-sky-500/10 p-3 rounded-xl border border-sky-500/20">
                <Mail className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">Suggérer un Algorithme</h3>
                <p className="text-xs text-slate-400">Quel algo aimerais-tu voir ajouté sur la plateforme ?</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Votre Nom</label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Salma Rezgui"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Votre Adresse Email</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: salma@example.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Nom de l'Algorithme</label>
                <input 
                  type="text" 
                  required
                  value={algorithmName}
                  onChange={(e) => setAlgorithmName(e.target.value)}
                  placeholder="Ex: Quick Sort, Merge Sort..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Message (Optionnel)</label>
                <textarea 
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Détails supplémentaires..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-sky-500 hover:bg-sky-400 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Envoyer la suggestion</span>
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="inline-flex bg-emerald-500/10 p-4 rounded-full border border-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-slate-100">Suggestion envoyée !</h4>
            <p className="text-sm text-slate-400">
              Merci <span className="text-sky-400 font-semibold">{name}</span> ! Votre suggestion a bien été envoyée directement par e-mail.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};