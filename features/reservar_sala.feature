Feature: Reserva de espacios de coworking
  Como usuario registrado del coworking
  Quiero reservar una sala de reuniones
  Para asegurar un espacio de trabajo privado

  Scenario: Reserva exitosa de una sala disponible
    Given que la sala "Sala Creativa" está disponible para el "2026-10-15"
    And el usuario "Carlos" cuenta con saldo o membresía activa
    When "Carlos" intenta reservar la "Sala Creativa" para el "2026-10-15"
    Then la reserva debe confirmarse exitosamente
    And el estado de la "Sala Creativa" debe cambiar a "Ocupada"

  Scenario: Intento de reservar una sala ya ocupada (Caso de error)
    Given que la sala "Sala Creativa" ya se encuentra ocupada el "2026-10-15"
    When el usuario "Ana" intenta reservar la "Sala Creativa" para el "2026-10-15"
    Then el sistema debe rechazar la reserva con un mensaje de error
    And la sala debe mantener su estado ocupado