import React, { useState } from "react"
import { FadeIn } from "./FadeIn"
import { X, Mail, ChevronDown, Loader2, CheckCircle, AlertCircle } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

type SubmissionState = "idle" | "loading" | "success" | "error"

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    description: "",
  })

  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.service ||
      !formData.description.trim()
    ) {
      setErrorMessage("Por favor, preencha todos os campos.")
      setSubmissionState("error")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Por favor, insira um email válido.")
      setSubmissionState("error")
      return
    }

    setSubmissionState("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await (async () => {
        try {
          return await response.json()
        } catch {
          return { success: response.ok, message: response.statusText || "" }
        }
      })()

      if (response.ok && result.success) {
        // Show success state and keep modal open until user clicks the explicit close button
        setSubmissionState("success")
        setErrorMessage("")
        // clear the form visually (the form will be hidden while in success state)
        setFormData({ name: "", email: "", service: "", description: "" })
      } else {
        setErrorMessage(result.message || `Erro ${response.status}: ${response.statusText}`)
        setSubmissionState("error")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setErrorMessage("Erro de conexão. Verifique sua internet e tente novamente.")
      setSubmissionState("error")
    }
  }

  const resetForm = () => {
    setFormData({ name: "", email: "", service: "", description: "" })
    setSubmissionState("idle")
    setErrorMessage("")
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={() => {
        // Close when clicking outside the modal, unless we're loading or we have a success message showing
        if (submissionState !== "loading" && submissionState !== "success") handleClose()
      }}>
      <FadeIn>
        <div
          // Prevent clicks inside the modal from closing it
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-[640px] w-full max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-[0_20px_24px_-4px_rgba(16,24,40,0.08),0_8px_8px_-4px_rgba(16,24,40,0.03)]">
          {/* Modal header */}
          <div className="flex flex-col items-center relative">
            <div className="flex flex-col items-start gap-4 self-stretch p-4 sm:p-6 pb-0">
              {/* Featured icon */}
              <div className="flex w-12 h-12 p-3 justify-center items-center rounded-[10px] border border-featured-icon-border shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]">
                <Mail className="w-6 h-6 text-text-secondary" strokeWidth={2} />
              </div>

              {/* Title and description */}
              <div className="flex flex-col items-start gap-1 self-stretch">
                <h2 className="self-stretch text-text-primary font-inter text-lg font-semibold leading-7">
                  Entrar em contato
                </h2>
                <p className="self-stretch text-text-tertiary font-inter text-sm font-normal leading-5">
                  Preencha as informações abaixo e entre em contato diretamente comigo
                </p>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              disabled={submissionState === "loading" || submissionState === "success"}
              className="absolute right-3 top-3 sm:right-4 sm:top-4 flex w-11 h-11 p-2 justify-center items-center rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <X className="w-6 h-6 text-gray-400" strokeWidth={2} />
            </button>

            <div className="h-5 self-stretch" />
          </div>

          {/* Content */}
          <div className="flex flex-col items-start gap-5 self-stretch px-4 sm:px-6">
            {submissionState !== "success" && (
              <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4 self-stretch">
                {/* Name input */}
                <div className="flex flex-col items-start gap-1.5 self-stretch">
                  <label className="text-text-secondary font-inter text-sm font-medium leading-5">Nome</label>
                  <div className="flex p-[10px_14px] items-center gap-2 self-stretch rounded-lg border border-border-primary bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Como posso te chamar?"
                      disabled={submissionState === "loading"}
                      className="flex-1 text-text-placeholder font-inter text-base font-normal leading-6 outline-none placeholder:text-text-placeholder disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Email input */}
                <div className="flex flex-col items-start gap-1.5 self-stretch">
                  <label className="text-text-secondary font-inter text-sm font-medium leading-5">
                    Email
                  </label>
                  <div className="flex p-[10px_14px] items-center gap-2 self-stretch rounded-lg border border-border-primary bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu-email@exemplo.com"
                      disabled={submissionState === "loading"}
                      className="flex-1 text-text-placeholder font-inter text-base font-normal leading-6 outline-none placeholder:text-text-placeholder disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Service dropdown */}
                <div className="flex flex-col items-start gap-1.5 self-stretch">
                  <label className="text-text-secondary font-inter text-sm font-medium leading-5">
                    Serviço
                  </label>
                  <div className="relative flex p-[10px_14px] items-center gap-2 self-stretch rounded-lg border border-border-primary bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      disabled={submissionState === "loading"}
                      className="flex-1 text-text-placeholder font-inter text-sm font-normal leading-6 outline-none appearance-none bg-transparent disabled:opacity-50 disabled:cursor-not-allowed">
                      <option value="">Selecione o serviço desejado</option>
                      <option value="desenvolvimento">Desenvolvimento Web</option>
                      <option value="design">Design UI/UX</option>
                      <option value="consultoria">Consultoria</option>
                    </select>
                    <ChevronDown className="w-5 h-5 text-text-placeholder" strokeWidth={1.67} />
                  </div>
                </div>

                {/* Description textarea */}
                <div className="flex h-28 sm:h-36 flex-col items-start gap-1.5 self-stretch">
                  <label className="text-text-secondary font-inter text-sm font-medium leading-5">
                    Breve descrição
                  </label>
                  <div className="flex p-[12px_14px] items-start gap-2 flex-1 self-stretch rounded-lg border border-border-primary bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]">
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Insira uma breve descrição do que você precisa :D"
                      disabled={submissionState === "loading"}
                      className="flex-1 self-stretch text-text-placeholder font-inter text-base font-normal leading-6 outline-none resize-none placeholder:text-text-placeholder disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
              </form>
            )}

            {/* Feedback section */}
            {(submissionState === "success" || submissionState === "error") && (
              <div
                className="flex items-center justify-between gap-3 p-4 rounded-lg border mt-4 self-stretch w-full"
                style={{
                  backgroundColor: submissionState === "success" ? "#f0f9ff" : "#fef2f2",
                  borderColor: submissionState === "success" ? "#0ea5e9" : "#ef4444",
                }}>
                <div className="flex items-center gap-3">
                  {submissionState === "success" ? (
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  )}
                  <p
                    className="text-sm font-medium"
                    style={{
                      color: submissionState === "success" ? "#0c4a6e" : "#7f1d1d",
                    }}>
                    {submissionState === "success"
                      ? "Seu email foi enviado com sucesso, em breve retornarei o seu contato."
                      : errorMessage}
                  </p>
                </div>

                {submissionState === "success" && (
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="inline-flex items-center px-3 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                      Fechar
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Modal actions */}
          <div className="flex pt-6 sm:pt-8 flex-col items-start self-stretch">
            <div className="flex flex-col sm:flex-row p-[0_16px_16px_16px] sm:p-[0_24px_24px_24px] items-start gap-3 self-stretch">
              <button
                type="button"
                onClick={handleClose}
                disabled={submissionState === "loading" || submissionState === "success"}
                className="flex p-[10px_16px] justify-center items-center gap-1.5 w-full sm:flex-1 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition duration-200 ease-linear order-2 sm:order-1 disabled:opacity-50 disabled:cursor-not-allowed">
                <span className="text-gray-700 font-inter text-base font-semibold leading-6">Cancelar</span>
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={submissionState === "loading" || submissionState === "success"}
                className="flex p-[10px_16px] justify-center items-center gap-1.5 w-full sm:flex-1 rounded-md px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-light transition duration-200 ease-linear order-1 sm:order-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {submissionState === "loading" && <Loader2 className="w-4 h-4 text-white animate-spin" />}
                <span className="text-white font-inter text-base font-semibold leading-6">
                  {submissionState === "loading" ? "Enviando..." : "Enviar"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
