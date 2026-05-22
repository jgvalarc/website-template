'use client'

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const fieldClass =
  'min-h-12 w-full border border-line bg-surface-raised px-4 py-3 text-copy placeholder:text-dim transition focus:border-accent focus:outline-none'
const labelClass =
  'mb-2 block font-mono text-[11px] font-medium tracking-[0.14em] text-muted uppercase'

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function ContactForm() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({})

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function touch(key: keyof FormState) {
    setTouched((current) => ({ ...current, [key]: true }))
  }

  const errors = {
    name: form.name.trim().length === 0 ? 'Nome obrigatório' : null,
    email: !isEmail(form.email) ? 'E-mail inválido' : null,
    subject: form.subject.trim().length === 0 ? 'Assunto obrigatório' : null,
    message: form.message.trim().length < 10 ? 'Mensagem muito curta' : null,
  }

  const canSubmit = Object.values(errors).every((e) => e === null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTouched({ name: true, email: true, subject: true, message: true })
    if (!canSubmit) return
    dialogRef.current?.showModal()
    setForm(INITIAL_FORM)
    setTouched({})
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-surface grid content-start gap-6 p-8 md:p-12 lg:p-14 lg:px-12"
      >
        <div className="border-line text-muted flex items-center justify-between gap-4 border-b pb-4 font-mono text-[11px] tracking-[0.14em] uppercase">
          <span className="eyebrow">Mensagem</span>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Nome" error={touched.name ? errors.name : null}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                onBlur={() => touch('name')}
                placeholder="O seu nome"
                required
                className={cn(
                  fieldClass,
                  touched.name && errors.name && 'border-red-500',
                )}
              />
            </Field>

            <Field label="E-mail" error={touched.email ? errors.email : null}>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                onBlur={() => touch('email')}
                placeholder="voce@email.com"
                required
                className={cn(
                  fieldClass,
                  touched.email && errors.email && 'border-red-500',
                )}
              />
            </Field>
          </div>

          <Field
            label="Assunto"
            error={touched.subject ? errors.subject : null}
          >
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={(e) => updateField('subject', e.target.value)}
              onBlur={() => touch('subject')}
              placeholder="Como podemos ajudar?"
              required
              className={cn(
                fieldClass,
                touched.subject && errors.subject && 'border-red-500',
              )}
            />
          </Field>

          <Field
            label="Mensagem"
            error={touched.message ? errors.message : null}
          >
            <textarea
              name="message"
              rows={6}
              value={form.message}
              onChange={(e) => updateField('message', e.target.value)}
              onBlur={() => touch('message')}
              placeholder="Conte-nos um pouco mais sobre o que procura..."
              required
              className={cn(
                fieldClass,
                'resize-none',
                touched.message && errors.message && 'border-red-500',
              )}
            />
          </Field>
        </div>

        <div className="border-line flex flex-wrap items-center justify-end gap-3 border-t pt-5">
          <Button
            type="submit"
            className="disabled:pointer-events-none disabled:opacity-40"
          >
            Enviar mensagem ↗
          </Button>
        </div>
      </form>

      <dialog
        ref={dialogRef}
        aria-labelledby="contact-dialog-title"
        aria-describedby="contact-dialog-description"
        className="border-line surface-deep text-copy mx-auto my-auto max-w-[480px] border p-0 backdrop:bg-black/70"
      >
        <div className="grid gap-[18px] p-12">
          <span className="eyebrow text-accent">Enviado</span>
          <h3
            id="contact-dialog-title"
            className="font-display m-0 text-[clamp(40px,5vw,56px)] leading-[0.92] uppercase"
          >
            Mensagem
            <br />
            <span className="text-accent">recebida.</span>
          </h3>
          <p
            id="contact-dialog-description"
            className="text-muted m-0 leading-[1.6]"
          >
            Respondemos em até 1 dia útil. Fique atento ao seu e-mail.
          </p>
          <Button
            onClick={() => dialogRef.current?.close()}
            className="justify-self-start"
          >
            Fechar
          </Button>
        </div>
      </dialog>
    </>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error: string | null
  children: React.ReactNode
}) {
  return (
    <label className="grid gap-0">
      <span className={labelClass}>{label}</span>
      {children}
      {error ? (
        <span className="mt-1 font-mono text-[10px] tracking-[0.08em] text-red-400 uppercase">
          {error}
        </span>
      ) : null}
    </label>
  )
}
