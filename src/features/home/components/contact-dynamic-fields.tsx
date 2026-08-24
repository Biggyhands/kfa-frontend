import type { ContactDynamicFieldsProps } from "@/utils/types";

const fieldClassName =
  "min-h-12 w-full border-b border-black/20 bg-transparent px-0 text-sm text-black outline-none transition-colors placeholder:text-black/35 focus:border-(--kfa-blue)";

const labelClassName =
  "mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-black";

export function ContactDynamicFields({
  interest,
  register,
}: ContactDynamicFieldsProps) {
  if (interest === "trial-class") {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="age" className={labelClassName}>
            Edad
          </label>

          <input
            id="age"
            {...register("age")}
            className={fieldClassName}
            placeholder="Edad"
          />
        </div>

        <div>
          <label htmlFor="program" className={labelClassName}>
            Programa de interés
          </label>

          <input
            id="program"
            {...register("program")}
            className={fieldClassName}
            placeholder="Ej. Kyokushin"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="availability" className={labelClassName}>
            Disponibilidad
          </label>

          <input
            id="availability"
            {...register("availability")}
            className={fieldClassName}
            placeholder="Ej. tardes entre semana"
          />
        </div>
      </div>
    );
  }

  if (interest === "parents") {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="childAge" className={labelClassName}>
            Edad del niño o joven
          </label>

          <input
            id="childAge"
            {...register("childAge")}
            className={fieldClassName}
            placeholder="Ej. 10 años"
          />
        </div>

        <div>
          <label htmlFor="previousExperience" className={labelClassName}>
            Experiencia previa
          </label>

          <input
            id="previousExperience"
            {...register("previousExperience")}
            className={fieldClassName}
            placeholder="Ej. ninguna"
          />
        </div>

        <div>
          <label htmlFor="mainGoal" className={labelClassName}>
            Objetivo principal
          </label>

          <input
            id="mainGoal"
            {...register("mainGoal")}
            className={fieldClassName}
            placeholder="Ej. disciplina y concentración"
          />
        </div>

        <div>
          <label htmlFor="preferredChannel" className={labelClassName}>
            Canal preferido
          </label>

          <input
            id="preferredChannel"
            {...register("preferredChannel")}
            className={fieldClassName}
            placeholder="WhatsApp, llamada o correo"
          />
        </div>
      </div>
    );
  }

  if (interest === "dojo") {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="country" className={labelClassName}>
            País
          </label>

          <input
            id="country"
            {...register("country")}
            className={fieldClassName}
            placeholder="País"
          />
        </div>

        <div>
          <label htmlFor="city" className={labelClassName}>
            Ciudad
          </label>

          <input
            id="city"
            {...register("city")}
            className={fieldClassName}
            placeholder="Ciudad"
          />
        </div>

        <div>
          <label htmlFor="dojoName" className={labelClassName}>
            Nombre del dojo
          </label>

          <input
            id="dojoName"
            {...register("dojoName")}
            className={fieldClassName}
            placeholder="Nombre del dojo"
          />
        </div>

        <div>
          <label htmlFor="instructorName" className={labelClassName}>
            Instructor responsable
          </label>

          <input
            id="instructorName"
            {...register("instructorName")}
            className={fieldClassName}
            placeholder="Nombre del instructor"
          />
        </div>

        <div>
          <label htmlFor="disciplines" className={labelClassName}>
            Disciplinas
          </label>

          <input
            id="disciplines"
            {...register("disciplines")}
            className={fieldClassName}
            placeholder="Ej. Kyokushin, Kickboxing"
          />
        </div>

        <div>
          <label htmlFor="background" className={labelClassName}>
            Trayectoria
          </label>

          <input
            id="background"
            {...register("background")}
            className={fieldClassName}
            placeholder="Breve trayectoria del dojo"
          />
        </div>
      </div>
    );
  }

  if (interest === "alliance") {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="entityType" className={labelClassName}>
            Tipo de entidad
          </label>

          <input
            id="entityType"
            {...register("entityType")}
            className={fieldClassName}
            placeholder="Empresa, colegio, fundación..."
          />
        </div>

        <div>
          <label htmlFor="responsibleContact" className={labelClassName}>
            Contacto responsable
          </label>

          <input
            id="responsibleContact"
            {...register("responsibleContact")}
            className={fieldClassName}
            placeholder="Nombre del responsable"
          />
        </div>

        <div>
          <label htmlFor="supportInterest" className={labelClassName}>
            Interés de apoyo
          </label>

          <input
            id="supportInterest"
            {...register("supportInterest")}
            className={fieldClassName}
            placeholder="Ej. becas, evento, programa social"
          />
        </div>

        <div>
          <label htmlFor="allianceType" className={labelClassName}>
            Modalidad de alianza
          </label>

          <input
            id="allianceType"
            {...register("allianceType")}
            className={fieldClassName}
            placeholder="Convenio, patrocinio, cooperación..."
          />
        </div>
      </div>
    );
  }

  if (interest === "donation") {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contributionType" className={labelClassName}>
            Tipo de aporte
          </label>

          <input
            id="contributionType"
            {...register("contributionType")}
            className={fieldClassName}
            placeholder="Económico o en especie"
          />
        </div>

        <div>
          <label htmlFor="supportedProgram" className={labelClassName}>
            Programa de interés
          </label>

          <input
            id="supportedProgram"
            {...register("supportedProgram")}
            className={fieldClassName}
            placeholder="Ej. becas, dotación, comunidad"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="followUpPreference" className={labelClassName}>
            Preferencia de seguimiento
          </label>

          <input
            id="followUpPreference"
            {...register("followUpPreference")}
            className={fieldClassName}
            placeholder="WhatsApp, llamada o correo"
          />
        </div>
      </div>
    );
  }

  if (interest === "seminars" || interest === "master-class") {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="seminarDiscipline" className={labelClassName}>
            Disciplina
          </label>

          <input
            id="seminarDiscipline"
            {...register("seminarDiscipline")}
            className={fieldClassName}
            placeholder="Ej. Kyokushin"
          />
        </div>

        <div>
          <label htmlFor="seminarLevel" className={labelClassName}>
            Nivel
          </label>

          <input
            id="seminarLevel"
            {...register("seminarLevel")}
            className={fieldClassName}
            placeholder="Principiante, avanzado, instructor..."
          />
        </div>

        <div>
          <label htmlFor="seminarCity" className={labelClassName}>
            Ciudad
          </label>

          <input
            id="seminarCity"
            {...register("city")}
            className={fieldClassName}
            placeholder="Ciudad"
          />
        </div>

        <div>
          <label htmlFor="academy" className={labelClassName}>
            Dojo o academia
          </label>

          <input
            id="academy"
            {...register("academy")}
            className={fieldClassName}
            placeholder="Nombre del dojo o academia"
          />
        </div>
      </div>
    );
  }

  return null;
}
