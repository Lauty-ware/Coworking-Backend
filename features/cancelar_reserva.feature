Feature: Cancelación de reservas
  Como usuario que realizó una reserva
  Quiero cancelar la reserva con anticipación
  Para liberar el espacio de trabajo

  Scenario: Cancelación exitosa de una reserva previa
    Given que el usuario "Carlos" tiene una reserva activa para la "Sala Creativa" el "2026-10-15"
    When "Carlos" solicita cancelar su reserva con anticipación válida
    Then la cancelación debe procesarse exitosamente
    And el estado de la "Sala Creativa" debe cambiar a "Disponible"

  Scenario: Intento de cancelar una reserva inexistente o fuera de tiempo (Caso de error)
    Given que el usuario "Ana" no posee una reserva activa para la "Sala Reuniones"
    When "Ana" intenta cancelar una reserva para dicha sala
    Then el sistema debe rechazar la cancelación indicando que no existe reserva previa